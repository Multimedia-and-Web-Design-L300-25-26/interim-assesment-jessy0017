import mongoose from "mongoose";

const cryptoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    symbol: { type: String, required: true, trim: true, uppercase: true, unique: true },
    price: { type: Number, required: true, min: 0 },
    image: { type: String, required: true },
    change24h: { type: Number, required: true },
  },
  { timestamps: true }
);

const Crypto = mongoose.model("Crypto", cryptoSchema);
export default Crypto;
