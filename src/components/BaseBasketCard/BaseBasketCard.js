import './BaseBasketCard.scss'
import baseJson from '../../assets/Data/basedata.json';

function BaseBasketCard({ }) {
    
    return (
        <div className="base-basket__card">
            <div className="base-basket__container">
            {/* <h2>Citywide Base Cost</h2>
                <h3>Housing: ${baseJson[0].housing}</h3>
                <h3>Grocery/Food: ${baseJson[0].food}</h3>
                <h3>Transportation: ${baseJson[0].transportation}</h3>
                <h3>Health Care: ${baseJson[0].healthcare}</h3>
                <h3>Child Care: ${baseJson[0].housing}</h3> */}
            <div className="basket__label-container">
                <h2 className="title-header">Citywide Base Cost</h2>
                <h2></h2>
            </div>
            <div className="basket__label-container">
                <h3>Housing: ${baseJson[0].housing}</h3>
                <p className="basket__adjusted"></p>
            </div>
            <div className="basket__label-container">
                <h3>Grocery/Food: ${baseJson[0].food} </h3>
                <p className="basket__adjusted"></p>
            </div>
            <div className="basket__label-container">
                <h3>Transportation: ${baseJson[0].transportation}</h3>
                <p className="basket__adjusted"></p>
            </div>
            <div className="basket__label-container">
                <h3>Health Care: ${baseJson[0].healthcare}</h3>
                <p className="basket__adjusted"></p>
            </div>
            <div className="basket__label-container">
                <h3>Child Care: ${baseJson[0].childcare}</h3>
                <p className="basket__adjusted"></p>

            </div>
            </div>
            <div>
                <h2>Total: ${Number(baseJson[0].housing) + Number(baseJson[0].food) + Number(baseJson[0].transportation) + Number(baseJson[0].healthcare)}</h2>
            </div>

        </div>
    )
}

export { BaseBasketCard };