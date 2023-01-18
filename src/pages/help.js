import React from "react";
import Layout from "@theme/Layout";
import Translate from "@docusaurus/Translate";

function Help() {
  return (
    <Layout title="Help" styles={{padding: "19px"}}>

      <div className="container text--center">
        <br /><br />
        <h1><Translate>Need help?</Translate></h1>
        <Translate>If you need help with Casnode, you can try one of the mechanisms below.</Translate>
        <br /><br /><br /><br />
        <div className="row">
          <div className="col">
            <h2><Translate>Forum</Translate></h2>
            <Translate>Discuss with maintainers or share your experience about Casnode on</Translate> <a href="https://forum.casbin.com"><Translate>Casnode Forum</Translate></a>.
          </div>
          <div className="col">
            <h2><Translate>Discord</Translate></h2>
            <Translate>You can join the conversation on</Translate> <a href="https://discord.gg/4eZa7dMurk"><Translate>Discord</Translate></a> <Translate>for contributing help.</Translate>
          </div>
          <div className="col">
            <h2><Translate>Tencent QQ</Translate></h2>
            <Translate>You can contact us by joining the QQ group:</Translate> <a href="https://qm.qq.com/cgi-bin/qm/qr?k=QKJ53gmeMj5BnnPsf23JasAQdmQF8yEl&jump_from=webapi">555019739</a>.
          </div>
          <div className="col">
            <h2>Github</h2>
            <Translate>At our</Translate> <a href="https://github.com/casbin/casnode"><Translate>GitHub repo</Translate></a><Translate>, browse and submit</Translate> <a href="https://github.com/casbin/casnode/issues">issues</a> <Translate>or</Translate> <a href="https://github.com/casbin/casnode/pulls">pull requests</a> <Translate>for bugs you find or any new features you may want implemented.</Translate>
          </div>
        </div>
      </div>
      <br /><br />
    </Layout>
  );
}

export default Help;
