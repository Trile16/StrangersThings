import React, { useState } from "react";

function AddPost({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const token = localStorage.getItem("token");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price,
          },
        }),
      }
    );
    const parsedResponse = await response.json();
    console.log(parsedResponse);
  }

  return (
    <div>
      <h1>Submit Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
            console.log(title);
          }}
        />
        <input
          value={description}
          placeholder="description"
          onChange={(e) => {
            setDescription(e.target.value);
            console.log(description);
          }}
        />
        <input
          value={price}
          placeholder="price"
          onChange={(e) => {
            setPrice(e.target.value);
            console.log(price);
          }}
        />
        <button type="submit">Add Post!</button>
      </form>
    </div>
  );
}

export default AddPost;
