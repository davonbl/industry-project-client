import { Map } from '../components/Map/Map';
import { BasketCard } from '../components/BasketCard/BasketCard';
import { BaseBasketCard } from '../components/BaseBasketCard/BaseBasketCard';
import './HomePage.scss'
import { useState } from 'react';
import jsonData from '../assets/Data/zipcodes.json';
import { ZipList } from '../components/ZipList/ZipList';
function HomePage() {
    const [onMap, setOnMap] = useState(false)
    const [clickedZip, setClickedZip] = useState([])
    const handleClick = (e) => {
        if (e.target.value === "map") {
            setOnMap(true)
        } else {
            setOnMap(false)
        }
    }

    const handleZipClick = (zip) => {
        setClickedZip(zip)
    }

    return (
        <div className="home">
            <div className="home__button--container">
                <button onClick={handleClick} className="home__button--map" value="map">Map</button>
                <button onClick={handleClick} className="home__button--zipcode" value="zipcode">By Zipcode</button>
            </div>

            <div className={onMap? "empty" : "home__card-container"}>
                <ZipList jsonData={jsonData} handleZipClick={handleZipClick}/>
                <BaseBasketCard />
                <BasketCard clickedZip={clickedZip}/>
            </div>
            <div className={onMap? "" : "empty"}>
                <Map />
            </div>

        </div>
    )
}

export { HomePage }