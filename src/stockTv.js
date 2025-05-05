import {inventory} from "./constants/inventory.js";

function stockTv() {
    for (let i = 0; i < inventory.length; i++) {
        console.log(inventory[i].originalStock);
    }
    return stockTv;
}
stockTv();

export default stockTv;