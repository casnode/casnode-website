---
title: Deployment
description: Run Casnode behind a reverse proxy, as a service, with backups and upgrades
keywords: [deployment, nginx, systemd, https, backup, upgrade]
authors: [hsluoyz]
---

A Casnode install is a folder with the `casnode` binary, `conf/`, `web/build/` and its data (database and uploads). The process listens on `httpport` (16900 by default) and starts the Next.js frontend on `httpport + 1` itself.

## Reverse proxy and HTTPS

Put Nginx, Caddy or CasWAF in front and proxy to `httpport`. An Nginx server block:

```nginx
server {
    listen 80;
    server_name forum.example.com;

    client_max_body_size 64m;

    location / {
        proxy_pass http://127.0.0.1:16900;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 120s;
    }
}
```

`client_max_body_size` must be at least as large as the upload limit you configured. `proxy_read_timeout` should be longer than the 25 seconds the live-update long poll holds a request. Set `trustProxyHeader = true` in `conf/app.local.conf` so the forum records the real client IP (see [Configuration](configuration.md#reverse-proxy)).

Get a certificate with `certbot --nginx -d forum.example.com` or your usual certificate tool; no Casnode-specific configuration is needed.

## Run it as a service

A systemd unit for a Linux server:

```ini
[Unit]
Description=Casnode forum
After=network.target

[Service]
Type=simple
User=casnode
WorkingDirectory=/opt/casnode
ExecStart=/opt/casnode/casnode
Restart=always
RestartSec=5
Environment=PATH=/usr/local/bin:/usr/bin:/bin

[Install]
WantedBy=multi-user.target
```

The Next.js frontend is a Node process started by the binary, so Node.js 20+ must be on the service's `PATH`. If you install Node with nvm, either install a system-wide Node or add the nvm `bin` directory to `Environment=PATH`.

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now casnode
sudo journalctl -u casnode -f
```

## Backups

Back up three things:

1. **The database.** For SQLite, copy `casnode.db` while the process is stopped, or use `sqlite3 casnode.db ".backup '/backup/casnode.db'"`. For MySQL or PostgreSQL, use `mysqldump` or `pg_dump`.
2. **Uploads.** `uploadsDir` (`files/uploads` by default).
3. **`conf/app.local.conf`**, which holds the database DSN, the Casdoor secret and other settings.

A daily job that dumps the database and syncs the uploads folder is enough for a small forum. Test a restore into a throwaway folder once in a while.

## Upgrades

For a 2.x release:

1. Stop the process.
2. Back up the database and uploads.
3. Unpack the new release over the old folder, keeping `conf/app.local.conf`, the database and `uploadsDir`. Do not overwrite `app.local.conf` with the new `app.conf`.
4. Start the process and open the forum; check the version in the footer and post a test reply.

2.x releases keep the database schema compatible. A 1.x forum cannot be upgraded in place: install 2.x as a separate site and import content if needed (see [Importing topics](importing.md)).

## Several forums on one server

A server can run several forums from one copy of the code. Each forum has its own folder with `conf/app.local.conf`, its own port, database and uploads, and reads the binary and `web/build` from the sibling `casnode` folder. See [Configuration](configuration.md#running-several-forums-from-one-folder-of-code).

## Scaling

Casnode is designed as a single process:

- Live updates use an in-memory message bus, so two instances do not share them.
- Sessions are files in `tmp/`, local to the instance.
- SQLite allows one writer.

For a large forum, use MySQL or PostgreSQL, keep sessions and uploads on shared storage if you run more than one process, and put a sticky-session load balancer in front. Running one instance is the supported configuration.