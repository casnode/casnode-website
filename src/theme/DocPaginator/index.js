import React from "react";
import DocPaginator from "@theme-original/DocPaginator";
import Giscus from "@giscus/react";
import {useColorMode} from "@docusaurus/theme-common";

export default function DocPaginatorWrapper(props) {
  return (
    <>
      <DocPaginator {...props} />
      <br />
      <Giscus
        id="comments"
        repo="casbin/casnode"
        repoId="MDEwOlJlcG9zaXRvcnkyNjc3NDk0NTE="
        category="Docs comments"
        categoryId="DIC_kwDOD_WIS84CRIiB"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={useColorMode().colorMode}
        lang="en"
        loading="lazy"
      />
    </>
  );
}
