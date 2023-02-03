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
  const [isHdd, setIsHdd] = useState(1);

  const data = makeData(valueStorage, valueTransfer, isHdd, isSingle);

  return (
    <>
      <div className={"main__graph-cards-wrapper"}>
        <Graph data={data} />

        <div className={"cards"}>
          <ProviderCard name={"Backblaze"} photo={"./logos/backblaze.png"} />
          <ProviderCard
            name={"Bunny"}
            photo={"./logos/bunny.png"}
            changeHdd={setIsHdd}
            hdd
          />
          <ProviderCard
            name={"Scaleway"}
            photo={"./logos/scaleway.png"}
            single
            changeSingle={setIsSingle}
            isSingle
          />
          <ProviderCard name={"Vultr"} photo={"./logos/vultr.png"} />
        </div>
      </div>

      <Sliders
        handlerStorage={setValueStorage}
        handlerTransfer={setValueTransfer}
        valueStorage={valueStorage}
        valueTransfer={valueTransfer}
      />
    </>
  );
}
