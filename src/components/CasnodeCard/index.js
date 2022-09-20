import React, {useEffect, useState} from "react";

export default function CasdoorCard(props) {
  const [link, setLink] = useState(null);

  useEffect(() => {
    if(localStorage.getItem("mainland") === "true") {
      setLink(props.cn);
    }else{
      setLink(props.int);
    }
  }, []);

  return (
    <iframe
      src={link}
      width={props.width}
      height={props.height}
      frameBorder="0"
      scrolling={props.scrolling}
    ></iframe>
  );
}

CasdoorCard.defaultProps = {
  src: "",
  width: "870",
  height: "450",
  scrolling: "no",
};
