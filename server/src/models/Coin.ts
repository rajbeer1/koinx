import mongoose from "mongoose";

const Schema = new mongoose.Schema(
    {
        id: {
            type: String,
        },
        symbol: {
            type: String,
        },
        name: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

// Schema.pre("insertMany", function (err, data, next) {
//     // console.log(data);
//     try {
//         data.map(
//             (coin: {
//                 id?: string;
//                 koinGeckoId?: string;
//                 symbol: string;
//                 name: string;
//             }) => {
//                 coin["koinGeckoId"] = coin.id;
//                 delete coin.id;
//             }
//         );
//     } catch (err) {
//         throw err;
//     }
//     // this.koinGeckoId = this.id; // Rename 'id' to 'koinXid'
//     // delete this.id; // Remove the old 'id' property
//     // next();
// });

export type CoinType = mongoose.InferSchemaType<typeof Schema>;

export const Coin = mongoose.model<CoinType>("Coin", Schema);
