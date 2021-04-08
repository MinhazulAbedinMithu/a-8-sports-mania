import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from "react-router-dom";
import './Header.css';
const Header = () => {
    // let history = useHistory();

    // function handleClick() {
    //     history.push("/home");
    // }
    return (
        <div className='banner'>
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <FontAwesomeIcon icon={faFutbol} size='5x' className='text-while'></FontAwesomeIcon>
                        <h1 className='banner-title'>Sports Mania</h1>
                        {/* <button type="button" onClick={handleClick}>
                Go home
            </button> */}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Header;