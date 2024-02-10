import React, {useEffect} from 'react';
import {unmountComponentAtNode} from "react-dom";


function User({user, onRemove, onToggle}) {
    return (
        <div>
            <b onClick={() => onToggle(user.id)}
               style={{
                   cursor: 'pointer',
                   color: user.active ? 'green' : 'black'
               }}>{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}


function UserList({users,setUsers, onRemove, onToggle}) {
    return (
        <div>
            {users.map((user, index) => (
                <User user={user} key={index} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    );
}

export default UserList;