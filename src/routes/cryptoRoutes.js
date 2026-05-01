import { Router } from "express";
import {
  createCrypto,
  getAllCrypto,
  getNewListings,
  getTopGainers,
} from "../controllers/cryptoController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", getAllCrypto);
router.get("/gainers", getTopGainers);
router.get("/new", getNewListings);
router.post("/", requireAuth, createCrypto);

export default router;
