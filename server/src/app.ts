import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
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
// app.use("/api/auth", userRouter);
// app.use("/api/notes", noteRouter);
app.all("*", async (req: Request, res: Response) => {
    res.json("Not Found");
});
