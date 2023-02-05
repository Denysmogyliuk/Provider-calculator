import SliderBar from "./SliderBar";

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
      <SliderBar
        handler={handleSliderStorageChange}
        item="Storage"
        value={valueStorage}
      />
      <SliderBar
        handler={handleSliderTransferChange}
        item="Transfer"
        value={valueTransfer}
      />
    </div>
  );
}
