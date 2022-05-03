import {User, UserAction, UserActionTypes} from "../../models/redux-models";
import { Dispatch } from "redux";
import { ThunkAction } from 'redux-thunk';
import { RootState } from "../reducers";
import axios from "axios";
import { type } from "os";

// export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootActions>;
declare module 'axios' {
    export interface AxiosConfig {
        _page:number;
        _limit:number;
    }
}

export const fetchUsers =(page =1, limit =5) =>{
   return async (dispatch: Dispatch<UserAction>) => {
       try {
           dispatch({type:UserActionTypes.FETCH_USERS});
           const response =await axios.get<User[]>(`https://jsonplaceholder.typicode.com/users?_page=${page}}&_limit=${limit}`);
           setTimeout(() =>{
               dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS,payload:response.data});

           }, 600);
           console.log("response");
           console.log(response);
        } catch(e){
            dispatch({type:UserActionTypes.FETCH_USERS_ERROR, payload: "Error Please Try Again"})
        }
   };
};
export const setUserPage = (page: number):UserAction =>{
     return {type:UserActionTypes.SET_USER_PAGE, payload:page};
};

export const fetchUser= (id: number)=>{
    return async(dispatch:Dispatch<UserAction>)=>{
        try {
            dispatch({type:UserActionTypes.FETCH_USER});
            const response =await axios.get<User>(`/users/${id}`);
            setTimeout(() => {
                dispatch({type:UserActionTypes.FETCH_USER_SUCCESS, payload:response.data});
            }, 700);
            console.log("response");
            console.log(response);

        } catch(e){
            dispatch({type:UserActionTypes.FETCH_USER_FAIL, payload: "Error Couldn't Load Resource"})
        }

    }

}

export const editUser=(editedUser:User) =>{
    return async (dispatch:Dispatch<UserAction>)=>{
        try{
            dispatch({type:UserActionTypes.EDIT_USER});
            const response= await axios.put(`/users/${editedUser.id}`);
            setTimeout(()=> {
                dispatch({type:UserActionTypes.EDIT_USER_SUCCESS, payload:response.data })
            }, 600);
            console.log("response");
            console.log(response);
        }
        catch(e){
            dispatch({type:UserActionTypes.EDIT_USER_FAIL, payload:"Couldn't Edit User"})
        }
    }
}