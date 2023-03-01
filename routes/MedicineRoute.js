import express from "express";
import { genap, prima, test } from "../controllers/MedicineController.js";
// import checkAuth from "../middleware/check-auth.js";
import { check } from "express-validator";

const router = express.Router();

router.post("/test", test);

router.post("/prima", prima);
router.post("/genap", genap);

export default router;
