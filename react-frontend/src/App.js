import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import user from "./api/user";
import UserTable from "./components/user/UserTable";
import UserModal from "./components/user/UserFormModal";
import {Grid} from '@material-ui/core';
import RoleModal from "./components/role/RoleModal";

const defaultQuery = {limit: 10, offset: 0};

const App = () => {
  const [query, setQuery] = useState(defaultQuery);
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);

  const listUsers = async () => {    
    const data = await user.list(query);
    setTotal(data.count);
    setUsers(data.rows);
  }

  const changeLimit = (e) => {
    query.limit = parseInt(e.target.value);
    setQuery(query);
    listUsers();
  }

  const changePage = (e, page) => {
    query.offset = parseInt(page);
    setQuery(query);
    listUsers();
  }
  
  useEffect(() => {
    listUsers();
  }, []);

  return (      
    <div>
      <NavBar/><br/>
      <Grid container alignItems="flex-start" spacing={2}>
        <Grid container spacing={4} alignItems="flex">
          <Grid item xs={6} alignItems="flex">
            <UserModal afterSave={listUsers}/>
          </Grid>
          <Grid item xs={6} alignItems="flex">
            <RoleModal/>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <UserTable 
            users={users} 
            offset={query.offset} 
            limit={query.limit} 
            total={total} 
            changeLimit={changeLimit} 
            changePage={changePage}          
          />
        </Grid>
      </Grid>
    </div>
  );
  
}


export default App;