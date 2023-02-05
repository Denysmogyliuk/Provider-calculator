import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Component = (props) => {
  const { onChange, options } = props;

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-row-radio-buttons-group-label"
        defaultValue="1"
        name="row-radio-buttons-group"
        onChange={onChange}
        row
        style={{ display: "flex", flexDirection: "column" }}
      >
        <FormControlLabel value="1" control={<Radio />} label={options.first} />
        <FormControlLabel value="" control={<Radio />} label={options.second} />
      </RadioGroup>
    </FormControl>
  );
};

export default Component;
