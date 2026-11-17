import express, { type Express } from "express";
import { handlerReadiness } from "./api/readiness.js";
import { middlewareLogResponses } from "./api/middlewareLogResponses.js";
import { handlerTestNewEndpoint } from "./api/testNewEndpoint.js";
import { middlewareMetricsInc } from "./api/metrics.js";
import { handlerMetrics } from "./api/handlerMetrics.js";
import { handlerReset } from "./api/handlerReset.js";

const app: Express = express();
const PORT: number = 8080;

//HANDLERS
app.use(middlewareLogResponses);
app.use("/app", middlewareMetricsInc, express.static("./src/app"));
app.get("/healthz", handlerReadiness);
app.get("/metrics", handlerMetrics);
app.get("/reset", handlerReset);
app.get("/testnewendpoint", handlerTestNewEndpoint);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
