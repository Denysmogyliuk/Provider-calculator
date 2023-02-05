import React, { memo } from "react";

import ProviderCard from "./ProviderCard";

function ProvidersBar({ settings, onChangeHdd, onChangeSingle }) {
  return (
    <div className={"providers-bar"}>
      {settings.map((item) => {
        const { hdd, name, photo, single } = item;

        return (
          <ProviderCard
            changeHdd={hdd ? onChangeHdd : null}
            changeSingle={item.single ? onChangeSingle : null}
            hdd={hdd}
            key={name}
            name={name}
            photo={photo}
            single={single}
          />
        );
      })}
    </div>
  );
}

export default React.memo(ProvidersBar);
