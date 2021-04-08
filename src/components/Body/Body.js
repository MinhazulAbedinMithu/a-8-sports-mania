import React, { useEffect, useState } from 'react';
import TeamCard from '../TeamCard/TeamCard';

const Body = () => {
    const [teams, setTeams] = useState([])
    useEffect( () => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain';
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    }, []);

    const fullBody = {
        backgroundColor: '#00183C',
    }

    return (
        <div style={fullBody}>
            <div className="container py-5">
                <div className="row">
                { 
                    teams.map(team => <TeamCard team={team} key={team.idTeam}></TeamCard>)
                }
                </div>
            </div>
        </div>
    );
};

export default Body;