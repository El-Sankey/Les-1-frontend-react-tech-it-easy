import './App.css';
import './constants/inventory.js';
import {bestSellingTv as tv, inventory} from "./constants/inventory.js";
import soldTv from './helpers/soldTv.js';
import stockTv from './helpers/stockTv.js';
import {toSellTv} from './helpers/toSellTv.js';
import {showOutcomeInConsole} from './constants/showOutcomeInConsole.js';
// import {availableSizes} from "./helpers/availableSizes.js";


function App() {

    showOutcomeInConsole()
    toSellTv()
    soldTv()
    // availableSizes()


    // cont  = inventory.sold;

    // const stockTv = inventory.originalStock;
    // return <p>Aantal ingekochte producten</p> + {stockTv}

    // let toSellTv;
    // toSellTv = stockTv - soldTv;
    // return <p>`Aantal verkochte producten ${toSellTv}`</p>

    return (<>
            {/*========== opdracht-1 ==========*/}
            <header className="outer-container">
                <div className="inner-container">
                    <span><h1>Tech it easy dashboard</h1></span>
                </div>
            </header>
            <main className="main-container">
                <section>
                    <h2 className="h2">Verkochtoverzicht</h2>
                    <div className="section1-Container">
                        <article className="soldTv">
                            <h3>Aantal verkochte <br/> produkten</h3>
                            <h2>{soldTv(inventory)}</h2>
                        </article>
                        <article className="stockTv">
                            <h3>Aantal ingekochte <br/> producten</h3>
                            <h2>{stockTv(inventory)}</h2>
                        </article>
                        <article className="toSellTv">
                            <h3>Aantal te verkopen <br/> producten</h3>
                            <h2>{toSellTv(inventory)}</h2>
                        </article>
                    </div>
                </section>
                {/*========== opdracht-2 ==========*/}
                <section>
                    <h2 className="h2">Beste verkochte Tv</h2>
                    <article className="section2-container">
                        <div className="best-seller-container">
                            <span className="bestSellerTvImg">
                                <img src="https://image.coolblue.nl/max/500x500/products/1786196" alt="tv image"/>
                            </span>
                            <div className="bestSellerInfo">
                                <h3>{tv.name} - {tv.type}</h3>
                                <h2>{tv.price}</h2>
                                <p>{tv.availableSizes}</p>
                                {/*/!*<h3>{inventory[3].type.name}</h3>*!/*/}
                                {/*/!*<h2>{inventory[3].price}</h2>*!/*/}
                                {/*/!*<p>{inventory[3].availableSizes.length}</p>*!/*/}

                                <ul className="bestSellerUl">
                                    <li><img src="src/assets/check.png" alt="checked-sign"/>wifi
                                        {/*{bestSellingTv.options[0].name}</li>*/}
                                    </li>
                                    <li><img src="src/assets/minus.png" alt="minus-sign"/>speech
                                        {/*{bestSellingTv.options[1].name}</li>*/}
                                    </li>
                                    <li><img src="src/assets/check.png" alt="checked-sign"/>hdr
                                        {/*{bestSellingTv.options[2].name}*/}
                                    </li>
                                    <li><img src="src/assets/check.png" alt="checked-sign"/>bluetooth
                                        {/*{bestSellingTv.options[3].name}*/}
                                    </li>
                                    <li><img src="src/assets/minus.png" alt="minus-sign"/>ambilight
                                        {/*{bestSellingTv.options[4].name}*/}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </section>
                <article>
                    <img src={inventory.sourceImg[1]} alt="tv-img"/>
                    <h3>{tv.name} - {tv.type}</h3>
                    <h2>{tv.price}</h2>
                    <p>{tv.availableSizes}</p>
                </article>
                <section>
                    <h2>Alle tvs</h2>
                    <button type="button" onClick>Meest verkochte tv</button>
                    <button type="button" onClick>Goedkoopste eerst</button>
                    <button type="button" onClick>Meest geschikt voor sport eerst</button>
                    <div>
                        <h3>{inventory.name}</h3>
                    </div>
                </section>
            </main>
            <footer>

            </footer>
        </>)

}


export default App
