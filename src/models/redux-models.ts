export interface UserState {
    users:User[];
    loading:boolean;
    error:null | string;
    page:number;
    limit:number;

}
interface UserAddress {
    street: string;
    suite:string,
    city:string,
    zipcode:string,
    geo:UserLocation;

}


interface UserLocation{
    lat: string;
    long:string;
}
interface UserCompany{
    name:string;
    catchPhrase:string;
    bs:string;
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    SET_USER_PAGE = 'SET_USER_PAGE',
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_FAIL = 'FETCH_USER_FAIL',
    EDIT_USER="EDIT_USER",
    EDIT_USER_SUCCESS="EDIT_USER_SUCCESS",
    EDIT_USER_FAIL="EDIT_USER_FAIL"
  }
  export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: UserAddress;
    phone: string;
    website: string;
    company: UserCompany;
  }
  interface SetPageUserAction {
    type: UserActionTypes.SET_USER_PAGE,
    payload: number
  }
  interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
  }

  interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload:User[];
  }
  
  interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
  }
  interface FetchUser{
    type: UserActionTypes.FETCH_USER;
}

interface FetchUserSuccess {
    type: UserActionTypes.FETCH_USER_SUCCESS;
    payload: User;
}

interface FetchUserFail {
    type: UserActionTypes.FETCH_USER_FAIL;
}

  interface EditUser{
     type:UserActionTypes.EDIT_USER;
  }

  interface EditUserSuccess{
    type: UserActionTypes.EDIT_USER_SUCCESS;
    payload:User;
  }

  interface EditUserFail{
    type: UserActionTypes.EDIT_USER_FAIL;
  }

  export type UserAction = FetchUsersAction 
             | FetchUsersErrorAction 
             | FetchUsersSuccessAction
             | SetPageUserAction
             | FetchUser
             | FetchUserSuccess
             | FetchUserFail
             | EditUser
             | EditUserSuccess
             | EditUserFail;
  
  

