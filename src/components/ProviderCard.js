import Radio from "./Radio";

const imgStyle = { display: "block", maxHeight: "100px", maxWidth: "100px" };

export default function ProviderCard({
  changeHdd,
  changeSingle,
  hdd,
  name,
  photo,
  single,
}) {
  const singleHandler = (evt) => changeSingle(evt.target.value);
  const hddHandler = (evt) => changeHdd(evt.target.value);

  return (
    <div className="provider__card">
      <div className="provider__header-logo-wrapper">
        <h3 className={"provider__header"}>{name}</h3>
        <img
          className={"provider__logo"}
          alt={name}
          src={photo}
          style={imgStyle}
        />
      </div>

      {single && (
        <Radio
          onChange={singleHandler}
          options={{ first: "Single", second: "Multy" }}
        />
      )}

      {hdd && (
        <Radio
          onChange={hddHandler}
          options={{ first: "HDD", second: "SSD" }}
        />
      )}
    </div>
  );
}
