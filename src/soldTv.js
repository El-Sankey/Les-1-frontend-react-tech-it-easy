import "./constants/inventory.js";


// function soldTv(inventory) {
//     const totalSoldTv = inventory.reduce((total, inventory) => {
//         return total + inventory.sold;
//     }, 0);
//     console.log(totalSoldTv)
//
// }
//
// soldTv();
// export default soldTv;
//=====================================================================
function soldTv(inventory) {
    const totalSold = inventory.reduce(
        (acc, inventory) => acc + inventory.sold, 0,
    )
    console.log(totalSold)
}

soldTv();
export default soldTv;
//====================================================================
// function soldTv(inventory) {
//     let totalSold = 0
//     inventory.forEach((item) => {
//         if (item.sold) totalSold++;
//         console.log(totalSold);
//     })
//     return totalSold;
// }
// soldTv();
//
// export default soldTv;




