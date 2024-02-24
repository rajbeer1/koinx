import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import { router as coinRouter } from "./routes/coin";
import { errorHandler } from "./middlewares/error-handler";

export const app = express();
//configs
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors());
//routes
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        data: "running...",
    });
});
app.use("/coin", coinRouter);
app.all("*", async (req: Request, res: Response) => {
    res.json("Not Found");
});
app.use(errorHandler);
