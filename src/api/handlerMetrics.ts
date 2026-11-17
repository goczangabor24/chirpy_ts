import { type Request, type Response } from "express";
import { config } from "../config.js";

export function handlerMetrics(req: Request, res: Response): void {
    res.set("Content-Type", "text/plain; charset=utf-8");
    res.send(`Hits: ${config.fileserverHits}`);
}
