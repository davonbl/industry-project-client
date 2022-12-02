function ZipCard({survey, handleZipClick}){
    return (
        <div onClick={() => handleZipClick(survey)}>
            <h3>{survey.zipcode}</h3>
        </div>
    )
}

export { ZipCard }