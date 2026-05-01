import { Router } from "express";
import { login, logout, register } from "../controllers/authController.js";

const router = Router();

// The README mentions GET; we support both GET and POST.
router.get("/register", register);
router.post("/register", register);

router.get("/login", login);
router.post("/login", login);

router.get("/logout", logout);
router.post("/logout", logout);

export default router;
