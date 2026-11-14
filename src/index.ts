import express, { type Express, type Request, type Response } from "express";
import { handlerReadiness } from './api/readiness.js';
import { middlewareLogResponses } from "./api/middlewareLogResponses.js";
import { handlerMetrics, handlerReset, middlewareIncFileserverHits } from "./api/metrics.js";
import { handlerTestNewEndpoint } from "./api/testNewEndpoint.js";

const app: Express = express();
const PORT: number = 8080;

//HANDLERS
app.use(middlewareLogResponses);
app.use(middlewareIncFileserverHits);
app.use("/app", express.static("./src/app"));
app.get("/healthz", handlerReadiness);
app.get("/metrics", handlerMetrics);
app.get("/reset", handlerReset);
app.get("/testnewendpoint", handlerTestNewEndpoint);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});