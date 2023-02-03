export default function makeData(storage, transfer, isHdd, isSingle) {
  console.log(storage, transfer);
  const backblazePrice =
    storage * 0.005 + transfer * 0.01 < 7
      ? 7
      : storage * 0.005 + transfer * 0.01;

  const vultrPrice =
    storage * 0.01 + transfer * 0.01 < 5 ? 5 : storage * 0.01 + transfer * 0.01;

  const scaleWayPrice =
    (isSingle
      ? storage < 75
        ? 0
        : (storage - 75) * 0.03
      : storage < 75
      ? 0
      : (storage - 75) * 0.06) + (transfer < 75 ? 0 : (transfer - 75) * 0.02);

  const bunnyPrice =
    storage * (isHdd ? 0.01 : 0.02) + transfer * 0.01 > 10
      ? 10
      : storage * (isHdd ? 0.01 : 0.02) + transfer * 0.01;

  return [
    {
      name: "BACKBLAZE",
      cost: backblazePrice.toFixed(2),
      color: "red",
    },
    {
      name: "BUNNY",
      cost: bunnyPrice.toFixed(2),
      color: "orange",
    },
    {
      name: "SCALEWAY",
      cost: scaleWayPrice.toFixed(2),
      color: "violet",
    },
    {
      name: "VULTR",
      cost: vultrPrice.toFixed(2),
      color: "blue",
    },
  ];
}
