import { Router } from "express";
import {
  createPasteController,
  fetchPasteController,
} from "../controllers/paste.controller";

const router = Router();

// Create a paste
router.post("/pastes", createPasteController);
router.get("/pastes/:id", fetchPasteController);

export default router;
