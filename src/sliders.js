import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

export default function Sliders({
  handlerStorage,
  handlerTransfer,
  valueStorage,
  valueTransfer,
}) {
  const handleSliderStorageChange = (evt) => {
    handlerStorage(evt.target.value);
  };

  const handleSliderTransferChange = (evt) => {
    handlerTransfer(evt.target.value);
  };

  return (
    <div>
      <Typography id="non-linear-slider" gutterBottom>
        {`Storage: ${valueStorage} GB`}
      </Typography>
      <Slider
        aria-label="Default"
        defaultValue={0}
        max={1000}
        onChange={handleSliderStorageChange}
        size="big"
        step={1}
        valueLabelDisplay="auto"
      />

      <Typography id="non-linear-slider" gutterBottom>
        {`Transfer: ${valueTransfer} GB`}
      </Typography>
      <Slider
        aria-label="Default"
        defaultValue={0}
        max={1000}
        onChange={handleSliderTransferChange}
        size="big"
        step={1}
        valueLabelDisplay="auto"
      />
    </div>
  );
}
