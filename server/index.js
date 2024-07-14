import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url"; // Import fileURLToPath function

import templatesData from "./data/templates.json" assert { type: "json" };

const __filename = fileURLToPath(import.meta.url); // Get current filename
const __dirname = path.dirname(__filename); // Get current directory name

const app = express();
const port = 3000;

app.use(cors());

app.get("/api/templates", (req, res) => {
  res.json(templatesData);
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/images/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  let filePath = '';

  if (fileName.endsWith("b.jpg")) {
    filePath = path.join(__dirname, `public/images/large/${fileName}`);
  } else if (fileName.endsWith("m.jpg")) {
    filePath = path.join(__dirname, `public/images/thumbnails/${fileName}`);
  } else {
    res.status(404).send("File not found");
    return;
  }

  // Send the file
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
