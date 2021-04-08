import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const TeamCard = (props) => {
    const { idTeam, strTeam, strTeamBadge, strSport } = props.team;
    const cardStyle = {
        backgroundColor : '#fff',
        borderRadius: '10px',
        textAlign: 'center',

    }
    const imgStyle ={
        width: '50%',
        margin: 'auto',
        
    }
    return (
        <div class="col-lg-4 col-md-6">
            <div class="card mb-4 text-center">
                <img src={strTeamBadge} class="card-img-top" style={imgStyle} alt="..."/>
                <div class="card-body">
                    <h2 class="card-title">{strTeam}</h2>
                    <p class="card-text">Sports type : {strSport}</p>
                    <Link to={`/details/${idTeam}`}>
                        <button className="btn btn-primary">
                            Explore <FontAwesomeIcon icon={faArrowRight} className='text-white' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;