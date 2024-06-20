import express from "express";

import { getForm, createForm } from "../controllers/info.js";

const router = express.Router();
router.get("/books", getForm);
router.post("/submit", createForm);

export default router;
