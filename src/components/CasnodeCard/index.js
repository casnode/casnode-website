import React from "react";

export default function CasnodeCard(props) {

  return (
    <iframe
      src={props.src}
      width={props.width}
      height={props.height}
      frameBorder="0"
      scrolling={props.scrolling}
    ></iframe>
  );
}

CasnodeCard.defaultProps = {
  src: "https://forum.casbin.com",
  width: "870",
  height: "450",
  scrolling: "no",
};
