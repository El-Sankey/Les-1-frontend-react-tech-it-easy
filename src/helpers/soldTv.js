import "../constants/inventory.js";

function soldTv(Inventory) {
    let totalSold;
    totalSold = Inventory.reduce((sum, tv) => sum + tv.sold, 0);
    console.log({totalSold});
    return totalSold;
}
// soldTv()
export default soldTv;

//=====================================================================
// function soldTv(inventory) {
//     const {sold: totalSold} = inventory; {
//     console.log(totalSold);
//     }
//     return totalSold;
// }
// soldTv();
// export default soldTv;

//=====================================================================
// function soldTv(inventory) {
//     let totalSoldTv = []
//     for (let i = 0; i < inventory.length; i++) {
//         totalSoldTv += inventory[i].sold;
//     }
//     return totalSoldTv;
// }
// soldTv();
// export default soldTv;

//====================================================================
// function soldTv(inventory) {
//     let totalSold = 0
//     inventory.forEach((inventory) => {
//         if (inventory.sold) totalSold++;
//         console.log(totalSold);
//     })
//     return totalSold;
// }
// soldTv();
//
// export default soldTv;