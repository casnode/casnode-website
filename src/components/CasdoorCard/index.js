import React, {useEffect, useState} from "react";

export default function CasdoorCard(props) {
  const [link, setLink] = useState(null);

  useEffect(() => {
    if(localStorage.getItem("mainland") === true) {
      setLink("https://door.casdoor.com/");
    }else{
      setLink("https://door.casdoor.org/");
    }
  }, []);

  return (
    <iframe
      src={link + props.src}
      width={props.width}
      height={props.height}
      style={{borderRadius: "20px"}}
      frameBorder="0"
      scrolling="no"
    ></iframe>
  );
}

CasdoorCard.defaultProps = {
  src: "",
  width: "600",
  height: "700",
};
