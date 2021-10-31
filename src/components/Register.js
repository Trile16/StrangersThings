import React, { useState } from "react";
import { useHistory } from "react-router";

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username: username,
              password: password,
            },
          }),
        }
      );

      const parsedResponse = await response.json();
      const token = parsedResponse.data.token;
      console.log(token);
      history.push("/login");
    } catch (error) {
      console.error(error);
      alert("Username is taken, choose another username");
    }
  }

  return (
    <div>
      <h1>Resigter for the App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          placeholder="Choose your username"
          onChange={(e) => {
            setUsername(e.target.value);
            console.log(username);
          }}
        />
        <input
          value={password}
          placeholder="Create a password"
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(password);
          }}
        />
        <button type="submit">Resigter!</button>
      </form>
    </div>
  );
}

export default Register;
