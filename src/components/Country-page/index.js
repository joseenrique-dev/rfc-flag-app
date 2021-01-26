import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import CountrySelected from '../Country-selected';
import Wrapper from '../Wrapper'
import './style.css';

export default function CountryPage({match, history}) {
    console.log('mmmm', match);
    const DBcountry = useSelector(state => state.countryList.find(item=>item.name === match.params.name))
    const [country, setCountry] = useState(DBcountry)
    useEffect(() => {
        if( !country ){
            fetch(`http://restcountries/rest/v2/name/${ match.params.name }`)
            .then(res =>res.json())
            .then(data=>{
                setCountry(data[0]);
                console.log('data', data)
            })
        }
        
    }, [])

    const handleClick = () =>{
        history.goBack();
    };
    return (
        <div>
            <Wrapper>
            <button className="back" onClick={handleClick}><i className="fas fa-long-arrow-alt-left"></i> Back</button>
            <CountrySelected {...country}/>
            </Wrapper>
        </div>
    )
}
