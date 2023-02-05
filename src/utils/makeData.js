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

const BACKBLAZE_STORAGE = 0.005;
const BACKBLAZE_TRANSFER = 0.01;
const BACKBLAZE_MIN_PAYMENT = 7;
const BUNNY_HDD = 0.01;
const BUNNY_SSD = 0.02;
const BUNNY_TRANSFER = 0.01;
const BUNNY_MAX_PAYMENT = 10;
const SCALEWAY_FREE_SINGLE = 75;
const SCALEWAY_FREE_MULTY = 75;
const SCALEWAY_FREE_TRANSFER = 75;
const SCALEWAY_SINGLE = 0.03;
const SCALEWAY_MULTY = 0.06;
const SCALEWAY_TRANSFER = 0.02;
const VULTR_STORAGE = 0.01;
const VULTR_TRANSFER = 0.01;
const VULTR_MIN_PAYMENT = 5;

export default function makeData(storage, transfer, isHdd, isSingle) {
  const backblazePrice = (
    storage * BACKBLAZE_STORAGE + transfer * BACKBLAZE_TRANSFER < 7
      ? BACKBLAZE_MIN_PAYMENT
      : storage * BACKBLAZE_STORAGE + transfer * BACKBLAZE_TRANSFER
  ).toFixed(2);

  const bunnyPrice = (
    storage * (isHdd ? BUNNY_HDD : BUNNY_SSD) + transfer * BUNNY_TRANSFER >
    BUNNY_MAX_PAYMENT
      ? BUNNY_MAX_PAYMENT
      : storage * (isHdd ? BUNNY_HDD : BUNNY_SSD) + transfer * BUNNY_TRANSFER
  ).toFixed(2);

  const scaleWayPrice = (
    (isSingle
      ? storage < SCALEWAY_FREE_SINGLE
        ? 0
        : (storage - SCALEWAY_FREE_SINGLE) * SCALEWAY_SINGLE
      : storage < SCALEWAY_FREE_MULTY
      ? 0
      : (storage - SCALEWAY_FREE_MULTY) * SCALEWAY_MULTY) +
    (transfer < SCALEWAY_FREE_TRANSFER
      ? 0
      : (transfer - SCALEWAY_FREE_TRANSFER) * SCALEWAY_TRANSFER)
  ).toFixed(2);

  const vultrPrice = (
    storage * VULTR_STORAGE + transfer * VULTR_TRANSFER < VULTR_MIN_PAYMENT
      ? VULTR_MIN_PAYMENT
      : storage * VULTR_STORAGE + transfer * VULTR_TRANSFER
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
