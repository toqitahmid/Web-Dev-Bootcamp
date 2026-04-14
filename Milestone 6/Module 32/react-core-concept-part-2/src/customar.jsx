import {use} from 'react';
export default function Customer({CustomUrl}){

    const users = use(CustomUrl);
    console.log(users);
    return(
        <div>
            <h3>users: {users.length}</h3>
        </div>
    )
}