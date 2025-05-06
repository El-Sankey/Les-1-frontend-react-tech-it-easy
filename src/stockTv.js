import "./constants/inventory.js";


function stockTv(inventory) {
    const totalStock = inventory.reduce((total, inventory) => {
        return total + inventory.sold
    }, 0);
console.log(totalStock)
}
export default stockTv
// =====================================================================
// function stockTv(inventory) {
//     const totalStock = inventory.reduce((inventory.originalStock)=> {
//         console.log(totalStock);
//     }, 0)
//     r
//     return totalStock + inventory.sold
//
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