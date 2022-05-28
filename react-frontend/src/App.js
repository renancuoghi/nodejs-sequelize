import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import user from "./api/user";

const defaultQuery = {limit: 10, offset: 0};

const App = () => {
  const [query, setQuery] = useState(defaultQuery);
  const [users, setUsers] = useState([]);

  const listUsers = async () => {
    const data = await user.list(query);
    console.log(data);
  }
  
  useEffect(() => {
    listUsers(query);
  }, []);

  return (      
    <div>
      <NavBar/>
    </div>
  );
  
}


export default App;