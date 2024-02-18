import { useState } from "react"
import { object } from "zod"

export function Assgnment4(){
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState('');

  const fetchUserData = async () => {
    const username = 'sudheer0071'
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>  
      <button onClick={()=>{fetchUserData();}}>Fetch</button>
      {userData && (
        <div className="git-card">
          <img src={userData.avatar_url} alt="User avatar" />
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <p>Public Repos: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
};