import {ZipCard} from '../ZipCard/ZipCard';
import './ZipList.scss'
import { useState } from 'react';

function ZipList({jsonData, handleZipClick, clickedZip}) {

    const [zipCodes, setZipCodes] = useState([])
    const [search, setSearch] = useState('')
    const handleInput = (e) => {
        // console.log(jsonData[0].zipcode)
        // console.log(e.target.value)
        setSearch(e.target.value)
    }
    return (
        <div className="ziplist">
            <h2 className="title-header --rm">Zip Codes<input onChange={handleInput} value={search} type="text" placeholder='search'/></h2>
            {jsonData.filter((ele) => ele.zipcode.includes(search)).map((survey) => {
                return <ZipCard key={survey.id} survey={survey} handleZipClick={handleZipClick} clickedZip={clickedZip}/>
            })
            }
        
        </div>
    )
}

export { ZipList }