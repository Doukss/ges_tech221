import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes/index.js";
import {swaggerDocs} from "./config/swagger.js";


const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api",routes);

swaggerDocs(app);
app.get("/", (req, res) => {
  res.json({ message: "TECH 221 API Running 🚀" });
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(400).json({
    message: err.message || "Erreur interne serveur",
  });
});

export default app;