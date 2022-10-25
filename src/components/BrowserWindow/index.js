import React, {useEffect, useState} from "react";
import styles from "./styles.module.css";

function BrowserWindow({children, minHeight}) {
  const [url, setUrl] = useState("https://forum.casbin.org");
  useEffect(() => {
    if(localStorage.getItem("mainland") === true) {
      setUrl("https://forum.casbin.com");
    }
  });
  return (
    <div className={styles.browserWindow} style={{minHeight}}>
      <div className={styles.browserWindowHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{background: "#f25f58"}} />
          <span className={styles.dot} style={{background: "#fbbe3c"}} />
          <span className={styles.dot} style={{background: "#58cb42"}} />
        </div>
        <div className={styles.browserWindowAddressBar}>{url}</div>
        <div className={styles.browserWindowMenuIcon}>
          <div>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}

export default BrowserWindow;
