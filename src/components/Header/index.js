import React from 'react'
import { Link } from 'react-router-dom';
import Wrapper from '../Wrapper';
import './style.css';

export default function Header() {
    const handleClick = () =>{

    }

    return (
        <div className="header-box">
            <Wrapper >
                <div className="content">
                    <Link to="/">
                        <p>
                            <h1>Where in the World ?</h1>
                        </p>
                    </Link>
                    <div className="dark-mode">
                        <p onClick={handleClick} className="header-p">
                            <span className="moon">
                            <i className="far fa-moon" />                   
                            {/* <i className="fas fa-moon" /> */}
                            </span>
                            Dark Mode
                        </p>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}
