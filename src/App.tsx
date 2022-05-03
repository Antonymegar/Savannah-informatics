import React from 'react';
import history from "./history";
import UsersTable from "./components/UserTable";
import { Router,Switch,Route, Link } from 'react-router-dom';
import UserEdit from "./components/UserEdit";
const  App = ()=> {
  return (
    <div className='ui container'>
       <Router history ={history}>
         <div className="div">
           <Switch>
           <Route path="/"exact component={UsersTable} />
          <Route path="/users/edit/:id" exact component ={UserEdit} />
           </Switch>

         </div>
         
          
         

       </Router>

       </div>
   
  );
}

export default App;
