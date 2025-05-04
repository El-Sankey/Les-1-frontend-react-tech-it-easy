import {inventory} from "./constants/inventory.js";

function inventories() {

    const soldTv = inventory.filter(inventory.sold);
    return <div><p>Aantal verkochte producten</p>
        ${soldTv}</div>

    const boughtTv = inventory.filter(inventory.originalStock) - {soldTv}
    return <div><p>Aantal verkochte producten</p>
        ${boughtTv}</div>

    // const toSellTv =

}

inventories()