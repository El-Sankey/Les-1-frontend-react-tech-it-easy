import {bestSellingTv as item, inventory} from './inventory.js';



// oefenbestand.js

export function showOutcomeInConsole() {

console.log('uitkomst opdracht 1a');
    const allName = inventory.map((name) =>{
        return `${name.name}`;
    });
    console.log(allName)

//========== »»» korte methode ««« =========
    // const allTvName = inventory.map((tv) => tv.name);
    // console.log(allTvName);
//======================================
}

console.log('uitkomst opdracht 1b');
    const stockSold = inventory.filter((stockTv) => {
        if (stockTv.originalStock === stockTv.sold) {
            return stockTv;
        } else {
            console.log(' ')
        }
    })
        console.log(stockSold)

console.log('uitkomst opdracht 1c')
    const typeTv = inventory.find((type) => {
        return  type.type === 'NH3216SMART'
});
    console.log(typeTv)


console.log('uitkomst opdracht 1d')
    // const sportTv =  inventory.filter((sports) => {
    //     if (sports.refreshRate >= 100) {
    //         return sports;
    //     } else {
    //         console.log(sportTv)
    //
    //     }
    // })


// const tvSport = inventory.map((sport) => { return { name: sport.brand + " " + sport.name , suitable: (sport.refreshRate >= 100) }; });console.log(tvSport);


export default showOutcomeInConsole;
