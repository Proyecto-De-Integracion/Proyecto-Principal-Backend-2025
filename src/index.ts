import express from "express";
import cors from "cors";
import morgan from "morgan";
import color from "chalk";
import { ENV } from "./config/env.ts";
import { errorSeparator } from "./utils/errorSeparator.ts";
import { router } from "./router/router.ts";

const app: express.Application = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(router);

app.listen(ENV.PORT, () => {
  errorSeparator();
  console.log(color.green(`                          🚀 Server is running at http://localhost:${ENV.PORT} 🚀`));
  errorSeparator();
});
