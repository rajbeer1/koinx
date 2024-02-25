import express from "express";
import { coinController } from "../controllers/coin";

export const router: express.Router = express.Router();

router.route("/exchangeRate/:coin1/:coin2").get(coinController.exchangeRate);
router.route("/value").post(coinController.RelativePrice);
router.route("/company/holdings/:coinId").get(coinController.currencyHoldings);
