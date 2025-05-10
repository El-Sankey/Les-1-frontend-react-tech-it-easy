import "./constants/inventory.js";

function stockTv(inventory) {
    let totalStock;
    totalStock = inventory.reduce((sum, tv) => sum + tv.originalStock, 0);
    console.log({totalStock});
    return totalStock
}
// stockTv();
export default stockTv;

// // =====================================================================
// function stockTv(inventory) {
//     const {originalStock: totalStock} = inventory;{
//         console.log(totalStock);
//     }
//     return totalStock;
// }
// stockTv();
// export default stockTv;

// ====================================================================
// function stockTv(inventory) {
//     if (!Array.isArray(inventory)){
//         throw new Error(`'Tis geen Array`);
//     }
//     let totalStock = 0
//     inventory.forEach((item) => {
//         if (item.originalStock) totalStock++;
//         console.log(totalStock);
//     });
//     return totalStock;
// }
// stockTv();
//
// export default stockTv;