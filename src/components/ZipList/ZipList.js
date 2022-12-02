import {ZipCard} from '../ZipCard/ZipCard';
import './ZipList.scss'

function ZipList({jsonData, handleZipClick, clickedZip}) {
    return (
        <div className="ziplist">
            <h2 className="title-header">Zip Codes</h2>
            {jsonData.map((survey) => {
                return <ZipCard key={survey.id} survey={survey} handleZipClick={handleZipClick} clickedZip={clickedZip}/>
            })
            }
        
        </div>
    )
}

export { ZipList }