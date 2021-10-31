import React, { useState } from "react";
import { useHistory } from "react-router";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/users/login",
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
      localStorage.setItem("token", token);
      history.push("/");
      window.location.reload(false);
    } catch (error) {
      console.error(error);
      alert("Username or password is invalid");
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
            console.log(username);
          }}
        />
        <input
          value={password}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(password);
          }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
