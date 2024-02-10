export const initialState = {
    users: [

        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ],
}

export const CREATE_USER = "CREATE_USER";
export const TOGGLE_USER = "TOGGLE_USER";
export const REMOVE_USER = "REMOVE_USER";
export const reducer = (state, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                users: [...state.users, action.user]
            };
        case TOGGLE_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    return user.id === action.id ? {...user, active: !user.active} : user
                })
            }
        case REMOVE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id),
            }

        default:
            return state;
    }
    return state;
}