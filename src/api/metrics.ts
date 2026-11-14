import { type NextFunction, type Request, type Response } from "express";

let fileserverHits = 0;

export function middlewareIncFileserverHits(req: Request, res: Response, next: NextFunction): void {
    fileserverHits++;
    next();
}

export function handlerMetrics(req: Request, res: Response): void {
    res.set("Content-Type", "text/plain; charset=utf-8");
    res.status(200);
    res.send(`Hits: ${fileserverHits}`);
}

export function handlerReset(req: Request, res: Response): void {
    fileserverHits = 0;
    res.set("Content-Type", "text/plain; charset=utf-8");
    res.status(200);
    res.send("Hits reset");
}
