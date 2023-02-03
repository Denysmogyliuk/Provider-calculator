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
  );
}
