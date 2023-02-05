import React, { useState } from "react";
import makeData from "../utils/makeData";
import Sliders from "./Sliders";
import Graph from "./Graph";
import ProvidersBar from "./ProvidersBar";
import PROVIDERS_SETTINGS from "../constants/PROVIDERS_SETTINGS";
import { Copyright } from "./Copyright";

export default function App() {
  const [valueStorage, setValueStorage] = useState(0);
  const [valueTransfer, setValueTransfer] = useState(0);
  const [isSingle, setIsSingle] = useState(1);
  const [isHdd, setIsHdd] = useState(1);

  const data = makeData(valueStorage, valueTransfer, isHdd, isSingle);

  return (
    <>
      <div className="main__graph-cards-wrapper">
        <Graph data={data} />

        <ProvidersBar
          onChangeHdd={setIsHdd}
          onChangeSingle={setIsSingle}
          settings={PROVIDERS_SETTINGS}
        />
      </div>

      <Sliders
        handlerStorage={setValueStorage}
        handlerTransfer={setValueTransfer}
        valueStorage={valueStorage}
        valueTransfer={valueTransfer}
      />
      <Copyright />
    </>
  );
}
