import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend API
    //for local you can put http://localhost:5000/api/users
    //here we need to keep our EC2 instance public ip 
    //In real time we will use env's but this is for testing
    // Example: http://34.228.32.207:5000/api/users
    axios
      .get("http://34.228.32.207:5000/api/users")
      .then((response) => {
        console.log('response,.,', response)
        setUsers(response.data); // Update state with fetched users
      })
      .catch((error) => {
        console.error("There was an error fetching the users:", error);
      });
  }, []);
  return (
    <div className="App">
      <h1>Full Stack App With React + Node + Postgres...</h1>
      <p>Example for deploying to ec2 instance in AWS</p>
      <h1>User List</h1>
      <div>
      
        {users?.length >=1 && users?.map((user) => (
          <div key={user.id}><p>{user.name}</p></div>
        ))}
        
      </div>
    </div>
  );
}

export default App;
