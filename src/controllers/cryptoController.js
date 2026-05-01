import Crypto from "../models/Crypto.js";

export async function getAllCrypto(req, res, next) {
  try {
    const cryptos = await Crypto.find().sort({ name: 1 });
    return res.json(cryptos);
  } catch (err) {
    return next(err);
  }
}

export async function getTopGainers(req, res, next) {
  try {
    const limit = Number(req.query.limit) || 5;
    const cryptos = await Crypto.find().sort({ change24h: -1 }).limit(limit);
    return res.json(cryptos);
  } catch (err) {
    return next(err);
  }
}

export async function getNewListings(req, res, next) {
  try {
    const limit = Number(req.query.limit) || 5;
    const cryptos = await Crypto.find().sort({ createdAt: -1, _id: -1 }).limit(limit);
    return res.json(cryptos);
  } catch (err) {
    return next(err);
  }
}

export async function createCrypto(req, res, next) {
  try {
    const { name, symbol, price, image, change24h } = req.body;

    if (!name || !symbol || price == null || !image || change24h == null) {
      return res
        .status(400)
        .json({ message: "name, symbol, price, image, and change24h are required" });
    }

    const crypto = await Crypto.create({
      name: String(name).trim(),
      symbol: String(symbol).trim().toUpperCase(),
      price: Number(price),
      image: String(image),
      change24h: Number(change24h),
    });

    return res.status(201).json(crypto);
  } catch (err) {
    // Handle duplicate key
    if (err?.code === 11000) {
      err.status = 409;
      err.message = "Crypto with that name or symbol already exists";
    }
    return next(err);
  }
}
