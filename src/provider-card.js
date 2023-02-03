import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "./provider-card.css";

export default function ProviderCard({
  name,
  photo,
  hdd,
  single,
  changeSingle,
  changeHdd,
}) {
  const singleHandler = (evt) => changeSingle(evt.target.value);
  const hddHandler = (evt) => changeHdd(evt.target.value);
  return (
    <div className={"provider-card"}>
      <h3 className={"provider-header"}>{name}</h3>
      <img
        className={"provider-logo"}
        alt="logo"
        src={photo}
        style={{ display: "block", maxHeight: "100px", maxWidth: "100px" }}
      ></img>
      {single ? (
        <FormControl>
          <RadioGroup
            defaultValue="1"
            onChange={singleHandler}
            style={{ display: "flex", flexDirection: "column" }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="1" control={<Radio />} label="Single" />
            <FormControlLabel value="" control={<Radio />} label="Multy" />
          </RadioGroup>
        </FormControl>
      ) : null}
      {hdd ? (
        <FormControl>
          <RadioGroup
            defaultValue="1"
            onChange={hddHandler}
            style={{ display: "flex", flexDirection: "column" }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="1" control={<Radio />} label="HDD" />
            <FormControlLabel value="" control={<Radio />} label="SSD" />
          </RadioGroup>
        </FormControl>
      ) : null}
    </div>
  );
}
