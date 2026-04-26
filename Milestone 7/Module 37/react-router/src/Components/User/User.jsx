import React from 'react';
import { useLoaderData } from 'react-router';
import UserInfo from './UserInfo';
const User = () => {

    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            This is User
            <div>
            {
                users.map(user => (
                    <UserInfo key={user.id} user={user}></UserInfo>
                ))
            }
            </div>
        </div>
    );
};

export default User;