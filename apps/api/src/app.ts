import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes";
import pasteRoutes from "./routes/paste.routes";
import { notFoundMiddleware } from "./middlewares/notFound.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", healthRoutes);
app.use("/api", pasteRoutes);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;
