import { act } from "react-dom/test-utils";

const initState = {
    users: [
        {id:1, name: 'john'},
        {id:2, name: 'mary'},
    ],
}

const rootRenderer = (state = initState, action) =>{
    switch (action.type) {
        case 'DELETE_USER':
            // console.log(action)
            let users = state.users
            users = users.filter(item => item.id !== action.payload.id);    
            return {
                ...state, users
            }
        case 'ADD_USER':
            let id = Math.floor(Math.random() * 10000001);
            let user = {id: id, name: `random ${id}`}
            return {...state, users: [...state.users,user]}   
        default:
            return state;
    }

}

export default rootRenderer;
