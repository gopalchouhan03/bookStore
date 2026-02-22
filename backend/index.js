import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";


const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT=process.env.PORT || 4000;
const URI = process.env.MONGO_URI;


// Connect MongoDB
if (!URI) {
  console.error("MongoDB URI is missing in .env file");
  process.exit(1);
}

mongoose.connect(URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
// defining routes
app.use("/book", bookRoute);

app.use("/user" , userRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
