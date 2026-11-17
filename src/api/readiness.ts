import { type Request, type Response } from "express"; 

export function handlerReadiness (req:Request, res:Response): void  {
    res.set("Content-Type", "text/plain; charset=utf-8");
    res.status(200);
    res.send("OK");
};