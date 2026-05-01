import "dotenv/config";

import mongoose from "mongoose";
import { connectDb } from "../config/db.js";
import Crypto from "../models/Crypto.js";

const seedCryptos = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: 65000,
    image: "https://assets.coincap.io/assets/icons/btc@2x.png",
    change24h: 2.5,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: 3200,
    image: "https://assets.coincap.io/assets/icons/eth@2x.png",
    change24h: 1.2,
  },
  {
    name: "Tether",
    symbol: "USDT",
    price: 1,
    image: "https://assets.coincap.io/assets/icons/usdt@2x.png",
    change24h: 0.01,
  },
  {
    name: "BNB",
    symbol: "BNB",
    price: 580,
    image: "https://assets.coincap.io/assets/icons/bnb@2x.png",
    change24h: 3.8,
  },
  {
    name: "USDC",
    symbol: "USDC",
    price: 1,
    image: "https://assets.coincap.io/assets/icons/usdc@2x.png",
    change24h: -0.02,
  },
  {
    name: "XRP",
    symbol: "XRP",
    price: 0.55,
    image: "https://assets.coincap.io/assets/icons/xrp@2x.png",
    change24h: 5.4,
  },
  {
    name: "Polkadot",
    symbol: "DOT",
    price: 7.25,
    image: "https://assets.coincap.io/assets/icons/dot@2x.png",
    change24h: -1.1,
  },
  {
    name: "Chainlink",
    symbol: "LINK",
    price: 14.7,
    image: "https://assets.coincap.io/assets/icons/link@2x.png",
    change24h: 4.1,
  },
  {
    name: "Polygon",
    symbol: "MATIC",
    price: 0.72,
    image: "https://assets.coincap.io/assets/icons/matic@2x.png",
    change24h: 0.9,
  },
  {
    name: "Litecoin",
    symbol: "LTC",
    price: 92,
    image: "https://assets.coincap.io/assets/icons/ltc@2x.png",
    change24h: -0.4,
  },
];

async function seed() {
  await connectDb(process.env.MONGO_URI);

  await Crypto.deleteMany({});
  await Crypto.insertMany(seedCryptos);

  console.log(`Seeded ${seedCryptos.length} cryptocurrencies.`);
}

seed()
  .catch((err) => {
    console.error("Seeding failed:", err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.connection.close();
  });
