import React from 'react';
import { use } from 'react';

const User2 = ({fetchUser}) => {

    const user2 = use(fetchUser);
    console.log (user2);
    return (
        <div>
            This is User2
        </div>
    );
};

export default User2;