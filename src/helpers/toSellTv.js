import "../constants/inventory.js";
import soldTv from "./soldTv.js";
import stockTv from "./stockTv.js";
// import {inventory} from "../constants/inventory.js";


export function toSellTv(inventory) {
    let totaltoSell;
    totaltoSell = stockTv(inventory) - soldTv(inventory);
    console.log({totaltoSell});
    return totaltoSell;
}
// toSellTv(inventory);
// export default toSellTv;