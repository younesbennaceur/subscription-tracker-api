import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscreptionRouter from "./routes/subscreption.routes.js";
import connectDb from "./database/mongodb.js";

const app = express();
app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/subscreptions", subscreptionRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, async() => {
  console.log(`Server is running http://localhost:${PORT}`);
  await connectDb();
});
