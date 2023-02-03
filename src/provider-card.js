import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

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
    <div className={"provider__card"}>
      <div className={"provider__header-logo-wrapper"}>
        <h3 className={"provider__header"}>{name}</h3>
        <img
          className={"provider__logo"}
          alt="logo"
          src={photo}
          style={{ display: "block", maxHeight: "100px", maxWidth: "100px" }}
        ></img>
      </div>

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
