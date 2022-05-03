import React, { Component, FormEvent, FormEventHandler, FunctionComponent, useEffect, useState } from 'react';
import _ from 'lodash';
import { connect, useDispatch } from 'react-redux';
import {fetchUser, editUser} from '../store/action-creators/user';
import { User, UserState } from '../models/redux-models';
import { RootState } from '../store/reducers';
import { RouteComponentProps } from 'react-router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/userActions';
import { userReducer } from '../store/reducers/userReducer';

 interface UserEditProps extends RouteComponentProps<OwnPropsParams>{
    user:User;
    fetchUser:(id:number)=> void;
    editUser:(user:User) => void;
    }


class  UserEdit extends Component <UserEditProps>{
    
   componentDidMount():void {
       this.props.fetchUser(Number(this.props.match.params.id));
   }

    submitHandler=(e: { preventDefault: () => void; }) => {
        e.preventDefault();
        editUser(this.props.user);
     }  
     
     nameChangeHandler= (event: { currenttarget: { value: User; }; }) => {
         editUser(event.currenttarget.value);
     }
     render() {
        if (!this.props.user) {
            return null;
        }
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update User</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.props.user.name} onChange={this.nameChangeHandler.bind}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.submitHandler}>Save</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        );
    }
}
interface OwnPropsParams{
    id:string
}
function mapStateToProps(
    state: UserState,
    ownProps: RouteComponentProps<OwnPropsParams>
) {
    return {
        user:state.users[Number(ownProps.match.params.id)]
    };
}
export default connect (
       mapStateToProps,{fetchUser,editUser}
) (UserEdit);
