import { combineReducers } from "@reduxjs/toolkit";
import { User } from "../../models/redux-models";
import { userReducer } from "./userReducer";
 
export interface UserState{
     readonly users:User
 }

export const rootReducer = combineReducers({
    user:userReducer,
});

export type RootState= ReturnType<typeof rootReducer>