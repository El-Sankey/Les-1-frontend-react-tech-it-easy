import './App.css';
import {soldTv} from './constants/inventory.js';
import {boughtTv} from  './constants/inventory.js';
import {toSellTv} from './constants/inventory.js';




function App() {
// function soldTv() {
//     let soldTv = 0
//     soldTv.filter(inventory[0].sold)
    // const soldTv = inventory.map(inventory);
    // soldTv.map(inventory[0].sold.length)
    // console.log(soldTv)
    // return 'Er zijn ' + (soldTv) + 'tv\'s verkocht'
// };
//
// function boughtTv () {
//     const boughtTv = inventory[0].originalStock;
//     boughtTv

}

// soldTv()
    return (
        <>
            <header>
                <section>
                    <h1>Tech it easy dashboard</h1>
                    <p>Verkocht overzicht</p>
                    {soldTv()}
                    {boughtTv()}
                    {toSell()}
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




