import React, {
  useState /*what data we want to hold on a webpage*/,
  useEffect,
} from "react";
import SinglePost from "./SinglePost";
import AddPost from "./AddPost";
import Messages from "./Messages";

function Posts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/posts"
      );

      const responseObj = await response.json();
      console.log(responseObj);
      setPosts(responseObj.data.posts);
    }

    getPosts();
  }, []);

  console.log(posts);

  const postsToRender = posts.map((post) => {
    return (
      <>
        <SinglePost post={post} />
        <Messages post={post} />
      </>
    );
  });

  return (
    <div>
      <h1>Posts:</h1>
      <AddPost posts={posts} setPosts={setPosts} />
      {postsToRender}
    </div>
  );
}

export default Posts;
