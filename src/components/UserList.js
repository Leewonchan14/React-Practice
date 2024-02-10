import React, {memo, useContext, useEffect} from 'react';
import {unmountComponentAtNode} from "react-dom";
import {UserDispatch} from "../App";


const User = memo(function User({user}) {
    const dispatch = useContext(UserDispatch)

    return (
        <div>
            <b onClick={() => dispatch({type:"TOGGLE_USER", id:user.id})}
               style={{
                   cursor: 'pointer',
                   color: user.active ? 'green' : 'black'
               }}>{user.username}</b> <span>({user.email})</span>
            <button onClick={() => dispatch({type:"REMOVE_USER", id:user.id})}>삭제</button>
        </div>
    );
})


function UserList({users}) {
    return (
        <div>
            {users.map((user, index) => (
                <User user={user} key={index} />
            ))}
        </div>
    );
}

export default memo(UserList);