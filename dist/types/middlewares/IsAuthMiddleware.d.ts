import { Request, Response, NextFunction } from 'express';
export declare function IsAuthMiddleware(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
