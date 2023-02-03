// import "./styles.css";
import React, { useState } from "react";
import makeData from "./make-data";
import ProviderCard from "./provider-card";
import Sliders from "./sliders";
import Graph from "./graph";
export default function App() {
  const [valueStorage, setValueStorage] = useState(0);
  const [valueTransfer, setValueTransfer] = useState(0);
  const [isSingle, setIsSingle] = useState(1);
  const [isHdd, setIsHdd] = useState(0);

  const data = makeData(valueStorage, valueTransfer, isHdd, isSingle);

  return (
    <>
      <Sliders
        handlerStorage={setValueStorage}
        handlerTransfer={setValueTransfer}
        valueStorage={valueStorage}
        valueTransfer={valueTransfer}
      />

      <Graph data={data} />

      <div style={{ display: "flex", marginLeft: "100px", gap: "62px" }}>
        <ProviderCard
          name={"Backblaze"}
          photo={
            "https://www.backblaze.com/pics/header/logo-backblaze-flame-header.4851ea2289eaf4242079c6dcd0acb1be.png"
          }
        />
        <ProviderCard
          name={"Bunny"}
          photo={
            "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b0/Scaleway_logo_2018.svg/2560px-Scaleway_logo_2018.svg.png"
          }
          changeHdd={setIsHdd}
          hdd
        />
        <ProviderCard
          name={"Scaleway"}
          photo={
            "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b0/Scaleway_logo_2018.svg/2560px-Scaleway_logo_2018.svg.png"
          }
          single
          changeSingle={setIsSingle}
          isSingle
        />
        <ProviderCard
          name={"Vultr"}
          photo={"https://www.vultr.com/favicon/android-chrome-512x512.png"}
        />
      </div>
    </>
  );
}
