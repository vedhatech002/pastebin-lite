import dotenv from "dotenv";
import app from "./app";
import { connectDB } from "./config/db";

dotenv.config();

const PORT = process.env.PORT || 3001;

async function startServer() {
  await connectDB();
  console.log("MongoDB connected");
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
  });
}

startServer();
