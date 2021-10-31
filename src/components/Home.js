import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Home(props) {
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const history = useHistory();

  const logout = () => {
    localStorage.clear("token");
    history.push("/Login");
    window.location.reload(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    async function getMe() {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/users/me",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const parsedResponse = await response.json();
      console.log(parsedResponse);

      const username = parsedResponse.data.username;

      const userPosts = parsedResponse.data.posts.map((post) =>
        post.active ? (
          <>
            <p>Title: {post.title}</p>
            <p>Description: {post.description}</p>
            <p>Price: {post.price}</p>
          </>
        ) : null
      );

      const userMessages = parsedResponse.data.messages.map((message) => (
        <>
          <p>From: {message.fromUser.username}</p>
          <p>Content: {message.content}</p>
        </>
      ));

      setUsername(username);
      setPosts(userPosts);
      setMessages(userMessages);
    }

    getMe();
  }, []);

  return (
    <div>
      <h1>Username: {username}</h1>
      <button onClick={logout}>Logout</button>
      <h1>Posts</h1>
      <p>{posts}</p>
      <h1>Messages</h1>
      <p>{messages}</p>
    </div>
  );
}

export default Home;
