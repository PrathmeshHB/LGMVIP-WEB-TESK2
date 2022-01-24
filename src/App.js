import React, {useState} from "react";
import appStyles from "./style.css";


function App() {

  const [userData, setUserData] = useState([]);
   
  const fetchData = async function() {
    const url = "https://reqres.in/api/users?page=1";
    const response = await fetch(url);
    const data = await response.json();
    setUserData(data.data);
};
return (
  <div>
    <div className="navBar">
      <h1  className="navBrand">LetsGrowMore</h1>
      <button onClick ={fetchData}  className="navButton">Get Users</button>
    </div>
    <h1 id="containerHeading">User Information</h1>
  
    <img src="/images/logo.png" alt=""  height={350}
          width={700} class="center"></img>
          <h1 id="containerHeading">This is a task 2 given by LetsGrowMore.</h1>
          <p id="containerHeading">Thank you for giving this oprtunity...</p>
    <div className="container">
      {userData.map(function(user){
        return(
          <div className="card">
            <img src={user.avatar} key = {user.avatar} className="image" alt="logo512.png" />
            <h3 className="userName" key ={user.first_name}  >{user.first_name} {user.Last_name}</h3>
            <p className="mailId" key = {user.email} >{user.email}</p>
          </div>
        );
      })}
    </div>
  </div>
);
}


export default App;
