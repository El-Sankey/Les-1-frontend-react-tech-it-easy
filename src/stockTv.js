import "./constants/inventory.js";

function stockTv(inventory) {
    let totalStock = 0
    inventory.forEach((item) => {
        if (item.originalStock)
            totalStock++
        console.log(totalStock);
    });
    return totalStock;
}

stockTv();

export default stockTv;