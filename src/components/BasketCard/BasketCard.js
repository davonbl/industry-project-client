import './BasketCard.scss'
import baseJson from '../../assets/Data/basedata.json';

function BasketCard({ clickedZip }) {
    const { zipcode, housing, food, transportation, healthcare, childcare } = clickedZip
    let totalBase = Number(baseJson[0].housing) + Number(baseJson[0].food) + Number(baseJson[0].transportation) + Number(baseJson[0].healthcare)
    let zipTotal = Number(housing) + Number(food) + Number(transportation) + Number(healthcare)
    const calculatePercentage = (base, survey) => {
        let difference = Number(base) - Number(survey)
        let divide = difference / base
        console.log(divide)
        if (divide.toString()[0] === "-") {
            return ("+" + divide.toString().slice(3, 5) + "%")

        } else {
            return ("-" + divide.toString().slice(2, 4) + "%")
        }
    }

    if (clickedZip.length !== 0) {
        return (
            <div className="basket__card">
                <div className="basket__container">
                    <div className="basket__label-container">
                        <h2 className="title-header">Zip code: {zipcode}</h2>
                        <h2 className="title-header">Diff</h2>
                    </div>
                    <div className="basket__label-container">
                        <h3>Housing: ${clickedZip.housing}</h3>
                        <p className={calculatePercentage(baseJson[0].housing, housing)[0] == '-' ? '"basket__adjusted red' : ' "basket__adjusted green'}>{calculatePercentage(baseJson[0].housing, housing)}</p>
                    </div>
                    <div className="basket__label-container">
                        <h3>Grocery/Food: ${clickedZip.food} </h3>
                        <p className={calculatePercentage(baseJson[0].food, food)[0] == '-' ? '"basket__adjusted red' : ' "basket__adjusted green'}>{calculatePercentage(baseJson[0].food, food)}</p>
                    </div>
                    <div className="basket__label-container">
                        <h3>Transportation: ${clickedZip.transportation}</h3>
                        <p className={calculatePercentage(baseJson[0].transportation, transportation)[0] == '-' ? '"basket__adjusted red' : ' "basket__adjusted green'}>{calculatePercentage(baseJson[0].transportation, transportation)}</p>
                    </div>
                    <div className="basket__label-container">
                        <h3>Health Care: ${clickedZip.healthcare}</h3>
                        <p className={calculatePercentage(baseJson[0].healthcare, healthcare)[0] == '-' ? '"basket__adjusted red' : ' "basket__adjusted green'}>{calculatePercentage(baseJson[0].healthcare, healthcare)}</p>
                    </div>

                </div>
                <div className="basket__label-container">
                    <h2 className="basket__total">Total: ${zipTotal} </h2>
                    <p className={calculatePercentage(totalBase, zipTotal)[0] == '-' ? '"basket__adjusted green' : ' "basket__adjusted red'}>{calculatePercentage(totalBase, zipTotal)}</p>
                </div>

            </div>
        )
    } else {
        return (
            ""
        )
    }
}

export { BasketCard };