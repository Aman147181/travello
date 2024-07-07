import express from "express";
import connectDB from "./connectDB.js";
import "dotenv/config";
import packageRoute from "./routes/Package.js";
import cors from "cors";
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors);
app.use("/package", packageRoute);
connectDB()
  .then(() => {
    app.listen(port);
    console.log(`Server running on port ${port}`);
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/", (req, res) => {
  res.send("Hello World!");
});
