import {inventory} from "./constants/inventory.js";

// export default function soldTv() {
//     for (let i = 0; i < inventory.length; i++) {
//         console.log(inventory[i].sold);
//     }
//     return soldTv;
// }


function soldTv() {
    for (let i=0; i < inventory.length; i++) {
        // console.log(inventory[i].sold)
        const soldTv = inventory[i].sold
            .map({inventory: soldTv()})
        console.log(soldTv);
    }
    return soldTv;
}
soldTv();

export default soldTv;

