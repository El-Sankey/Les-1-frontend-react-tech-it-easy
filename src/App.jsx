import './App.css';
import {inventory} from './constants/inventory.js';



function App() {
function soldTv() {
    const soldTv = inventory[0].sold;
    soldTv.map(inventory[0].sold.length)
    console.log(soldTv)
    return 'Er zijn ' + (soldTv) + 'tv\'s verkocht'
}
soldTv()
    return (
        <>
            <h1>Tech it easy dashboard</h1>
            <p>Verkocht overzicht</p>
            <div>Aantal verkochte producten</div>
            {soldTv()}
        </>
)

}

export default App




