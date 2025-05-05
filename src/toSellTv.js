import "./constants/inventory.js";
import soldTv from "./soldTv.js";
import stockTv from "./stockTv.js";


function toSellTv() {
    let totaltoSell;
    totaltoSell = stockTv(item) - soldTv(item)
        console.log(totaltoSell)

}