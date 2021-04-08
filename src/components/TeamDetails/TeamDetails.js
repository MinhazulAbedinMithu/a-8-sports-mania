import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import maleImage from '../../images/male.png';
import femaleImage from '../../images/female.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faFutbol, faMars, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';



// library.add(fab, faFlag, faFutbol, faMars);

const TeamDetails = () => {
    const {idTeam} = useParams();
    const [team, setTeam] = useState({});
    useEffect( () => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    }, [idTeam])
    const {strTeam, 
        strTeamBadge, 
        strTeamBanner,
        strTwitter, 
        strYoutube, 
        strFacebook, 
        strSport, 
        strGender, 
        intFormedYear, 
        strCountry, 
        strDescriptionEN} = team;
    const styleBanner ={
        width: '100%',
        height: 'auto'
    }
    return (
        <div>
            <div className='container-fluid px-0'>
                <img src={strTeamBanner} alt='team banner' style={styleBanner}/>
            </div>
            <div className="container">
                <div className="row my-5 bg-primary rounded py-3 text-white align-items-center" >
                        <div className="col-md-6 px-5">
                            <img src={strTeamBadge} alt='team badge' className="w-50" rounded-circle/>
                            <h2>{strTeam}</h2>
                            <ul>
                                <li>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />
                                    Founded: {intFormedYear}
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faFlag} className='me-2' />
                                    Country: {strCountry}
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faFutbol} className='me-2' />
                                    Sport Type: {strSport}
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faMars} className='me-2' />
                                    Gender: {strGender}
                                </li>
                            </ul>
                        </div>
                    <div className="col-lg-6">
                        <img className="img-fluid" src={strGender === 'Female' ? femaleImage : maleImage} alt="Team Image"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p>{strDescriptionEN}</p>
                    </div>
                </div>
                <div className="row">
                    <div className=" text-center">
                        <div className="d-flex justify-content-center py-5">
                            <div className="px-3">
                                <a href={strTwitter === '' ? 'https://www.twitter.com' : `https://${strTwitter}`}>
                                <FontAwesomeIcon icon={faTwitter} size='3x'/>
                                </a>
                            </div>
                            <div className="px-3">
                                <a href={strFacebook === '' ? 'https://www.facebook.com' : `https://${strFacebook}`}>
                                    <FontAwesomeIcon icon={faFacebook} size='3x' color='blue'/>
                                </a>
                            </div>
                            <div className="px-3">
                                <a href={strYoutube === '' ? 'https://www.youtube.com' : `https://${strYoutube}`}>
                                    <FontAwesomeIcon icon={faYoutube} size='3x' color='red'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;