import React from 'react'
import Wrapper from '../Wrapper'

export default function CountrySelected(
    { 
        flag, name, nativeName,
        population, region,subRegion,
        capital,currencies = [], languages = [],
        topLevelDomain, borders = []
    }
    ) {
        
    return (
        <div>
            <Wrapper>
                <h2>{name}</h2>
                <p><strong>Native Name:</strong> {nativeName}</p>
                <p><strong>Population:</strong> {population}</p>
                <p><strong>Region:</strong> {region}</p>
                <p><strong>Sub Región:</strong> {subRegion}</p>
                <p><strong>Capital:</strong> {capital}</p>
                <p><strong>Top Level Domain:</strong> {topLevelDomain}</p>
                <p><strong>Currencies:</strong> {currencies.map((item)=> <span>{item.name} </span>)}</p>
                <p><strong>Languages:</strong> {languages.map((item) => <span className="languages">{item.name}</span>)}</p>
                <p><strong>Borders:</strong> {borders.map(data=> <span>{data} </span>)}</p>
                <img src={flag} alt=""/>
            </Wrapper>
        </div>
    )
}
