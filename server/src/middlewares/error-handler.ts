import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const errorHandler = (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof Error) {
        console.log(err.message);
        return res.status(400).json({
            errors: [
                {
                    message: err.message,
                },
            ],
        });
    }
    return res.status(400).json({
        errors: [
            {
                message: err,
            },
        ],
    });
};
