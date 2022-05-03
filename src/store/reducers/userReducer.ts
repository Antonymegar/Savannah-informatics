import {UserAction ,UserActionTypes, UserState } from "../../models/redux-models";
const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
    page: 1,
    limit:2,
  };
  
  export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
      case UserActionTypes.FETCH_USERS:
        return {...state, loading: true,};
      case UserActionTypes.FETCH_USERS_SUCCESS:
        return {...state ,loading: false,users: action.payload};
      case UserActionTypes.FETCH_USERS_ERROR:
        return {...state , loading: false, error: action.payload};
        case UserActionTypes.SET_USER_PAGE:
        return {...state, page:action.payload};

        case UserActionTypes.FETCH_USER:
        case  UserActionTypes.EDIT_USER:
          return{...state, loading:true}
          
        default:
        return state;
    }
};
