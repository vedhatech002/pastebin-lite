import { Router } from "express";
import { viewPasteController } from "../controllers/view.controller";

const router = Router();

router.get("/p/:id", viewPasteController);

export default router;
