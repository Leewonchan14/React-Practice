import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";
import InputSample from "./components/InputSample";
import UserList from "./components/UserList";
import {createContext, useCallback, useMemo, useReducer, useRef, useState} from "react";
import CreateUser from "./components/CreateUser";
import useInput from "./hooks/useInput";
import {initialState, reducer} from "./contexts/user.reducer";

const countActiveUsers = (users) => {
    console.log('counting..');
    return users.filter(user => user.active).length;
}

export const UserDispatch = createContext(null);

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {users} = state;

    const count = useMemo(() => {
        return countActiveUsers(users)
    }, [users]);

    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser/>
            <UserList users={users} />
            <div>활성 사용자 수 : {count}</div>
        </UserDispatch.Provider>
    );
}

export default App;
