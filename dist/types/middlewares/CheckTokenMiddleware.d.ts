import { Request, Response, NextFunction } from "express";
export declare function CheckTokenMiddleware(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
