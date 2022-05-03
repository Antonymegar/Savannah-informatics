import React, {FunctionComponent, useEffect, useState} from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/userActions';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';


const UsersTable: FunctionComponent = () => {
    const {users, loading, error, page, limit} = useTypedSelector(state=> state.user)
    const {fetchUsers, setUserPage} = useActions();
    const pages = [1,2,3,4,5];
     useEffect(()=>{
         fetchUsers(page, limit);
     }, [page]);

     if (loading) {
        return (
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      )

      }
    
      if (error) {
        return <h1>{error}</h1>;
      }

 return (
     <div>
        <table>
            <thead>
                <tr>
                    <th>
                        id
                    </th>
                    <th>
                        name
                    </th>
                    <th>
                        username
                    </th>
                    <th>
                        Appartment
                    </th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.address.suite}</td>
                    <td>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group" style={{ marginBottom: "20px" }}>
                    <Link to={`edit/${user.id}`} className="btn btn-sm btn-outline-secondary">Edit user </Link>
                    </div>
                    </div>
                    </td>
                </tr>)}
            </tbody>
        </table>
        <div style={{display: 'flex'}}>
        {pages.map(item =>
          <div
            key={item}
            onClick={() => setUserPage(item)}
            style={{border: item === page ? '2px solid lightblue' : '1px solid lightblue', padding: 10}}
          >
            {item}
          </div>)}
      </div>
        </div>
        
    );
};

export default UsersTable;
