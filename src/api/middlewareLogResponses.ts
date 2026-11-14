import { NextFunction, type Request, type Response } from "express";

export function middlewareLogResponses(req: Request, res: Response, next: NextFunction): void {
    res.on("finish", () => {
        const statusCode = res.statusCode;
        if (statusCode >= 400) {
            console.log(`[NON-OK] ${req.method} ${req.originalUrl} - Status: ${statusCode}`);
        }
    });
    
    next();
}