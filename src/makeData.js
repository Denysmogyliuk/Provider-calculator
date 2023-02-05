const BACKBLAZE = "BACKBLAZE";
const BUNNY = "BUNNY";
const SCALEWAY = "SCALEWAY";
const VULTR = "VULTR";

const MIN_COLORS = {
  [BACKBLAZE]: "red",
  [BUNNY]: "orange",
  [SCALEWAY]: "violet",
  [VULTR]: "blue",
};

export default function makeData(storage, transfer, isHdd, isSingle) {
  const backblazePrice = (
    storage * 0.005 + transfer * 0.01 < 7
      ? 7
      : storage * 0.005 + transfer * 0.01
  ).toFixed(2);

  const vultrPrice = (
    storage * 0.01 + transfer * 0.01 < 5 ? 5 : storage * 0.01 + transfer * 0.01
  ).toFixed(2);

  const scaleWayPrice = (
    (isSingle
      ? storage < 75
        ? 0
        : (storage - 75) * 0.03
      : storage < 75
      ? 0
      : (storage - 75) * 0.06) + (transfer < 75 ? 0 : (transfer - 75) * 0.02)
  ).toFixed(2);

  const bunnyPrice = (
    storage * (isHdd ? 0.01 : 0.02) + transfer * 0.01 > 10
      ? 10
      : storage * (isHdd ? 0.01 : 0.02) + transfer * 0.01
  ).toFixed(2);

  const minPrices = [
    { name: "BACKBLAZE", price: backblazePrice },
    { name: "BUNNY", price: bunnyPrice },
    { name: "SCALEWAY", price: scaleWayPrice },
    { name: "VULTR", price: vultrPrice },
  ]
    .reduce((acc, item) => {
      if (!acc.length) {
        acc = [item];
        return acc;
      }

      const minValue = Math.min(...acc.map(({ price }) => price));

      if (item.price < minValue) {
        acc = [item];
        return acc;
      }

      if (item.price === minValue) {
        acc = [...acc, item];
        return acc;
      }

      return acc;
    }, [])
    .map(({ name }) => name);

  const hash = {
    BACKBLAZE: {
      name: "BACKBLAZE",
      cost: backblazePrice,
      color: "grey",
    },
    BUNNY: {
      name: "BUNNY",
      cost: bunnyPrice,
      color: "grey",
    },
    SCALEWAY: {
      name: "SCALEWAY",
      cost: scaleWayPrice,
      color: "grey",
    },
    VULTR: {
      name: "VULTR",
      cost: vultrPrice,
      color: "grey",
    },
  };

  minPrices.forEach((name) => {
    hash[name].color = MIN_COLORS[name];
  });

  const list = Object.keys(hash);

  return list.map((id) => hash[id]);
}
