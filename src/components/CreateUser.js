import React, {memo, useContext, useEffect, useRef} from 'react';
import {UserDispatch} from "../App";
import useInput from "../hooks/useInput";

function CreateUser() {
    const nextId = useRef(4);

    let [{username, email}, onChange, reset] = useInput({
        username: "",
        email: "",
    });

    const dispatch = useContext(UserDispatch)

    return (
        <div style={{marginTop:"300px"}}>
            <input type="text" name={"username"} placeholder={"계정명"}
                   onChange={onChange} value={username}
            />
            <input type="text"
                   name={"email"}
                   placeholder={"이메일"}
                   onChange={onChange}
                   value={email}
            />
            <button onClick={() =>{
                dispatch({
                    type: "CREATE_USER",
                    user: {
                        id: nextId.current,
                        username,
                        email,
                    },
                })
                reset()
                nextId.current += 1;
            }}>등록</button>
        </div>

    );
}

export default memo(CreateUser);