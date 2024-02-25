import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const errorHandler = (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log(err);
    if (err instanceof Error) {
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
