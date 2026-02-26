import express from "express";
import multer from "multer";
import fs from "fs";
import { createRequire } from "module";
import mammoth from "mammoth";

const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");  // The ENTIRE module is exported here

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = req.file.path;
    const mime = req.file.mimetype;
    let text = "";

    console.log("File received:", req.file);

    // ---- PDF FILES ----
    if (mime === "application/pdf") {
      const buffer = fs.readFileSync(filePath);

      // pdf-parse must be called like this:
      const data = await pdfParse(buffer);
      text = data.text;
    }

    // ---- DOCX FILES ----
    else if (
      mime ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const buffer = fs.readFileSync(filePath);
      const result = await mammoth.extractRawText({ buffer });
      text = result.value;
    }

    // ---- TEXT FILES ----
    else if (mime === "text/plain") {
      text = fs.readFileSync(filePath, "utf8");
    }

    // ---- UNSUPPORTED FILES ----
    else {
      fs.unlinkSync(filePath);
      return res.status(400).json({ error: "Unsupported file type: " + mime });
    }

    fs.unlinkSync(filePath);

    res.json({
      extractedText: text.replace(/\s+/g, " ").trim(),
    });
  } catch (err) {
    console.error("UPLOAD ERROR:", err);
    res.status(500).json({
      error: "File processing failed",
      details: err.message,
    });
  }
});

export default router;
