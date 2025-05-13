import './App.css';
import './constants/inventory.js';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import soldTv from "./soldTv.js";
import stockTv from "./stockTv.js";
import {toSellTv} from "./toSellTv.js";


function App() {

    // cont soldTv = inventory.sold;
    // return <p>Aantal verkcohte producten</p> + {soldTv};

    // const stockTv = inventory.originalStock;
    // return <p>Aantal ingekochte producten</p> + {stockTv}

    // let toSellTv;
    // toSellTv = stockTv - soldTv;
    // return <p>`Aantal verkochte producten ${toSellTv}`</p>

    return (
        <>
            <header>
                <h1>Tech it easy dashboard</h1>
                <h2>Verkocht overzicht</h2>
                <section>
                    <div className="section1">
                        <div className="soldTv">
                            <h3>Aantal verkochte <br/> produkten</h3>
                            <h3>{soldTv(inventory)}</h3>
                        </div>
                        <div className="stockTv">
                            <h3>Aantal ingekochte <br/> producten</h3>
                            <h3>{stockTv(inventory)}</h3>
                        </div>
                        <div className="toSellTv">
                            <h3>Aantal te verkopen <br/> producten</h3>
                            <h3>{toSellTv(inventory)}</h3>
                        </div>
                    </div>
                </section>
            </header>
            <main>
                <section>
                    <div className="section2">
                        <h2>Beste verkochte Tv</h2>
                        <div className="img-1">
                            <img src="https://image.coolblue.nl/max/500x500/products/1786196" alt="tv image"/>
                            <h3>{inventory[3].type.name}</h3>
                            <h2>{inventory[3].price}</h2>
                            <p>{inventory[3].availableSizes.length}</p>
                            <img src="./assets/check.png" alt="checked-sign"/>{bestSellingTv.options[0].name}
                            <img src="./assets/minus.png" alt="minus-sign"/>{bestSellingTv.options[1].name}
                            <img src="./assets/check.png" alt="checked-sign"/>{bestSellingTv.options[2].name}
                            <img src="./assets/check.png" alt="checked-sign"/>{bestSellingTv.options[3].name}
                            <img src="./assets/minus.png" alt="minus-sign"/>{bestSellingTv.options[4].name}
                        </div>
                    </div>
                </section>
            </main>
            <footer>

            </footer>
        </>
    )

}


export default App




