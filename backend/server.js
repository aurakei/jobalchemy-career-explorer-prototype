import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import careerRoutes from "./routes/careerExplorer.js";
import uploadRoutes from "./routes/upload.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/career-explorer", careerRoutes);
app.use("/api/upload", uploadRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
