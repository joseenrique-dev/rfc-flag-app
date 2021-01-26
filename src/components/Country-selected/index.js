import React from 'react';
import Wrapper from '../Wrapper';
import './style.css';

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
                <img src={flag} alt=""/>
                <h2>{name}</h2>
                <div className="grid">
                    <div>
                        <p><strong>Native Name:</strong> {nativeName}</p>
                        <p><strong>Population:</strong> {population}</p>
                        <p><strong>Region:</strong> {region}</p>
                        <p><strong>Sub Región:</strong> {subRegion}</p>
                        <p><strong>Capital:</strong> {capital}</p>
                    </div>
                </div>
                <div>
                    <p><strong>Top Level Domain:</strong> {topLevelDomain}</p>
                    <p><strong>Currencies:</strong> {currencies.map((item)=> <span>{item.name} </span>)}</p>
                    <p><strong>Languages:</strong> {languages.map((item) => <span className="languages">{item.name}</span>)}</p>
                </div>
                <p><strong>Borders:</strong></p>
                <div className="border-box">
                    {borders.map(data=> <span className="border-item">{data} </span>)}
                </div>
            </Wrapper>
        </div>
    )
}
