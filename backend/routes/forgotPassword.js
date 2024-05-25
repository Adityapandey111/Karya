import express from "express"
import { forgotPassword, resetPassword } from "../controllers/forgotPasswordController.js"

const router = express.Router();
router.post("/forgotPassword", forgotPassword)
router.post("/resetPassword", resetPassword)
console.log(5);
export default router;