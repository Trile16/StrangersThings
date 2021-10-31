import React, { useState } from "react";

function Messages({ post }) {
  const token = localStorage.getItem("token");
  const [content, setContent] = useState("");

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/posts/${post._id}/messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            message: {
              content: content,
            },
          }),
        }
      );

      const parsedResponse = await response.json();
      console.log(parsedResponse);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={content}
          placeholder="message here"
          onChange={(e) => {
            setContent(e.target.value);
            console.log(content);
          }}
        />
        <button type="submit">Send Message!</button>
      </form>
    </div>
  );
}

export default Messages;
