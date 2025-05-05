import "./constants/inventory.js";

function soldTv(inventory) {
    let totalSold = 0
    inventory.forEach((item) => {
        if (item.sold) totalSold++;
        console.log(totalSold);
    })
    return totalSold;
}

export default soldTv;

// export default function soldTv() {
//     for (let i = 0; i < inventory.length; i++) {
//         console.log(inventory[i].sold);
//     }
//     return soldTv;
// }



