import React from "react";
import {useEffect, useState} from "react";
import NavbarNavLink from "@theme/NavbarItem/NavbarNavLink";

export default function Casdoor(props) {
  const [link, setLink] = useState("https://door.casdoor.com/");
  if(props.src === "") {
    useEffect(() => {
      if(localStorage.getItem("mainland") === true) {
        setLink("https://qm.qq.com/cgi-bin/qm/qr?k=SCBnKNj_1ljeXFT2dk8cwoGQwc5lFy8l&jump_from=webapi");
      }else{
        setLink("https://gitter.im/casbin/casdoor");
      }
    }, []);
  }
  return (
    <NavbarNavLink
      href={link + props.src}
      {...props}
    />
  );
}
