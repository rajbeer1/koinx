import { coinGecko } from "../../services/lib/coin_gecko";
import cron from "node-cron";
export const reloadCoinGeckoDataCron = async () => {
    try {
        cron.schedule("0 * * * *", async () => {
            await coinGecko.listCoins();
        });
    } catch (err) {
        throw err;
    }
};
