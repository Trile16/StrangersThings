import React from "react";

function SinglePost({ post }) {
  const token = localStorage.getItem("token");

  const handleDelete = async () => {
    await fetch(
      `https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/posts/${post._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  return (
    <div>
      <h1>User: {post.author.username}</h1>
      <h2>Title: {post.title}</h2>
      <ul>
        <li>Description: {post.description}</li>
        <li>Price: {post.price}</li>
        <li>Location: {post.location}</li>

        <button
          type="button"
          className="btn-delete"
          onClick={() => handleDelete()}
        >
          Delete
        </button>
      </ul>
    </div>
  );
}

export default SinglePost;
