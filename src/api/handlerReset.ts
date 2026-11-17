import { type Request, type Response } from "express";
import { config } from "../config.js";

export function handlerReset(req: Request, res: Response): void {
    config.fileserverHits = 0;
    res.set("Content-Type", "text/plain; charset=utf-8");
    res.send("Hits reset");
}
