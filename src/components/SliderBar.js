import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

export default function SliderBar({ handler, item, value}) {
  return (
    <>
      <Typography id="non-linear-slider" gutterBottom>
        {`${item}: ${value} GB`}
      </Typography>
      <Slider
        aria-label="Default"
        defaultValue={0}
        max={1000}
        onChange={handler}
        size="big"
        step={1}
        valueLabelDisplay="auto"
      />
    </>
  );
}
