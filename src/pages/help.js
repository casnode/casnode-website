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
            <Translate>Discuss with maintainers or share your experience about Casnode on</Translate> <a href="https://forum.casbin.com" target="_blank" rel="noreferrer"><Translate>Casnode Forum</Translate></a>.
          </div>
          <div className="col">
            <h2><Translate>Discord</Translate></h2>
            <Translate>You can join the conversation on</Translate> <a href="https://discord.gg/d8dsAWgn43" target="_blank" rel="noreferrer"><Translate>Discord</Translate></a> <Translate>for contributing help.</Translate>
          </div>
          <div className="col">
            <h2><Translate>Tencent QQ</Translate></h2>
            <Translate>You can contact us by joining the </Translate> <a href="https://cdn.casdoor.com/casdoor/resource/built-in/admin/qq_casnode.png" target="_blank" rel="noreferrer">QQ group</a>.
          </div>
          <div className="col">
            <h2>Github</h2>
            <Translate>At our</Translate> <a href="https://github.com/casbin/casnode" target="_blank" rel="noreferrer"><Translate>GitHub repo</Translate></a><Translate>, browse and submit</Translate> <a href="https://github.com/casbin/casnode/issues" target="_blank" rel="noreferrer">issues</a> <Translate>or</Translate> <a href="https://github.com/casbin/casnode/pulls" target="_blank" rel="noreferrer">pull requests</a> <Translate>for bugs you find or any new features you may want implemented.</Translate>
          </div>
        </div>
      </div>
      <br /><br />
    </Layout>
  );
}

export default Help;
