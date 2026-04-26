import React from 'react';
import { Link} from 'react-router';
import { useNavigate } from 'react-router';

const style = {

    "margin" : "20px",
    "padding" : "20px",
    "border" : "5px solid purple",
    "borderRadius" : "10px",
}

const UserInfo = ({user}) => {

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/user/${user.id}`);
    }

    return (
        <div style={style}>
            <h2>{user.name}</h2>
            <p>{user.phone}</p>
            <p>{user.email}</p>
            <Link to = {`/user/${user.id}`}>Details</Link>
            <button onClick={handleNavigate}>Details of user</button>
        </div>
    );
};

export default UserInfo;