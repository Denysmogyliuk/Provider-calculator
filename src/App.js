// import "./styles.css";
import React, { useState } from "react";
import {
  BarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  LabelList,
  Cell,
} from "recharts";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import makeData from "./make-data";
import ProviderCard from "./provider-card";

export default function App() {
  const [valueStorage, setValueStorage] = useState(0);
  const [valueTransfer, setValueTransfer] = useState(0);
  const [isSingle, setIsSingle] = useState(1);
  const [isHdd, setIsHdd] = useState(0);

  const handleSliderStorageChange = (evt) => {
    setValueStorage(evt.target.value);
  };

  const handleSliderTransferChange = (evt) => {
    setValueTransfer(evt.target.value);
  };

  const data = makeData(valueStorage, valueTransfer, isHdd, isSingle);
  return (
    <>
      <Box width={800}>
        <Typography id="non-linear-slider" gutterBottom>
          {`Storage: ${valueStorage} GB`}
        </Typography>
        <Slider
          size="big"
          max={1000}
          step={1}
          defaultValue={0}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={handleSliderStorageChange}
        />

        <Typography id="non-linear-slider" gutterBottom>
          {`Transfer: ${valueTransfer} GB`}
        </Typography>
        <Slider
          size="big"
          max={1000}
          step={1}
          defaultValue={0}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={handleSliderTransferChange}
        />
      </Box>

      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <BarChart width={800} height={600} data={data}>
        <YAxis
          tick={{ fontFamily: "sans-serif" }}
          type="number"
          domain={[0, 100]}
        />
        <Bar dataKey="cost" label={{ position: "top" }}>
          {data.map((entry) => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
          <LabelList dataKey="uv" position="top" fill="#000" />
        </Bar>{" "}
        <XAxis
          tick={{ fontFamily: "sans-serif" }}
          dataKey="name"
          allowDataOverflow="true"
        />
      </BarChart>
      {/* </ResponsiveContainer> */}

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
