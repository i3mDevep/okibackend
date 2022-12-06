import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import { getUrlFrame } from "../../services/metabase";

export default function Metabase() {
  const [url, seturl] = useState("");
  const [loading, setloading] = useState(true);
  useEffect(async () => {
    setloading(true);
    let r = await getUrlFrame();
    setloading(false);
    seturl(r.data.urlFrame);
  }, []);
  if (loading) return "Cargando...";
  return (
    <div>
      <Iframe
        src={url}
        width="100%"
        height="650px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
      />
    </div>
  );
}
