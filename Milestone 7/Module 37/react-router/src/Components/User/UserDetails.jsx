import React from 'react';
import { useLoaderData } from 'react-router';
import { useNavigate } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    return (
        <div>
            This is User Details
            <h2>{user.name}</h2>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default UserDetails;