import './App.css';
import './constants/inventory.js';
import soldTv from "./soldTv.js";
import stockTv from "./stockTv.js";
// import toSellTv from "./soldTv.js";


function App() {

    // const soldTv = inventory.sold;
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
                <section>
                <h2>Verkocht overzicht</h2>
                    <div className="section1">
                        <div className="soldTv"><p>Aantal verkochte produkten</p></div>
                        {soldTv()}
                        <div className="stockTv"><p>Aantal ingekochte producten</p></div>
                        {stockTv()}
                        <div className="toSellTv"><p>Aantal te verkopen producten</p></div>
                    </div>
                </section>
            </header>
            <main>
                <section>

                </section>
            </main>
            <footer>

            </footer>
        </>
    )

}

export default App




