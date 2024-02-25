import axios from "axios";
import { Coin } from "../../models/Coin";

interface requestOptions {
    method?: string;
    data?: Record<string, any>;
}
interface Coin {
    id: string;
    symbol: string;
    name: string;
}
class CoinGecko {
    url: string = "https://api.coingecko.com/api/v3";

    private async apiCaller(
        route: string,
        options: requestOptions = {
            data: {},
            method: "GET",
        }
    ): Promise<any> {
        try {
            const { data } = await axios({
                url: this.url + route,
                ...options,
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                },
            });
            return data;
        } catch (err) {
            throw err;
        }
    }

    public listCoins = async (): Promise<Coin[]> => {
        try {
            const data = await this.apiCaller("/coins/list", { method: "GET" });
            console.log(data[0]);
            await Coin.deleteMany({});
            await Coin.insertMany(data);
            return data;
        } catch (err) {
            console.log(err);
            throw err;
        }
    };
    public coinsMaketData = async (ids: string): Promise<any> => {
        try {
            console.log(ids);
            return await this.apiCaller(
                `/coins/markets?vs_currency=usd&ids=${ids}`,
                {
                    method: "GET",
                }
            );
        } catch (err) {
            // console.log(err);
            throw err;
        }
    };
    public getHistoricalData = async (
        fromCurrency: string,
        days: string
    ): Promise<any> => {
        try {
            const historicalPricesUrl = this.apiCaller(
                `/coins/${fromCurrency}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
                {
                    method: "GET",
                }
            );
            return historicalPricesUrl;
        } catch (err) {
            throw err;
        }
    };
    public currencyHoldingComapnies = async (coin: string): Promise<any> => {
        try {
            const data = await this.apiCaller(
                `/companies/public_treasury/${coin}`,
                {
                    method: "GET",
                }
            );
            return data;
        } catch (err) {
            throw err;
        }
    };
}

export const coinGecko = new CoinGecko();
