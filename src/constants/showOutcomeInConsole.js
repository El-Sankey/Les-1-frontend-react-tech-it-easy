import {inventory} from './inventory.js';
import {toSellTv} from "../helpers/toSellTv.js";



export const showOutcomeInConsole = () => {
	console.log('========== opdracht 1a ==========');
	const allName = inventory.map((name) => {
		return `${name.name}`;
	});
	console.log(allName);
//========== »»» korte methode ««« =========
	// const allTvName = inventory.map((tv) => tv.name);
	// console.log(allTvName);
//==========================================
	console.log('========== opdracht 1b ==========');
	const stockSold = inventory.filter((stockTvs) => {
		if (stockTvs.originalStock === stockTvs.sold) {
			return stockTvs;
		} else {
			console.log('NaN');
		}
	});
	console.log(stockSold);
	console.log('========== opdracht 1c ==========');
	const typeTv = inventory.find((type) => {
		return type.type === 'NH3216SMART'
	});
	console.log(typeTv);
//========== »»» korte methode ««« =========
//     const typeTv = inventory.find((type) => type.type === 'NH3216SMART');
//     console.log(typeTv)
//==========================================
	console.log('========== opdracht 1d ==========');
	const tvSport = inventory.map((sport) => {
		return {
			name: sport.brand + " " + sport.name, suitable: (sport.refreshRate >= 100)
		};
	});
	console.log(tvSport)
// const sportsKijkers = inventory.filter((sports) => {
//     if (sports.refreshRate >= 100) {
//         return true;
//     } else if (sports.brand+sports.name){
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(sportsKijkers);

// const sportsKijkers = inventory.filter((sports) => {
//     if (sports.name`${sports.brand}` + `${sports.name})`) {
//         if ((!{suitable: sports.refreshRate >= 100}) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// });
// console.log(sportsKijkers);
	console.log('========== opdracht 1e ==========');
	toSellTv();


};

