import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div>
      <nav>
        <ul>
          <span>
            {localStorage.length !== 0 ? (
              <Link to="/">Home</Link>
            ) : (
              <Link to="/Login">Login</Link>
            )}
          </span>
          <span>
            <Link to="/Posts">Posts</Link>
          </span>
          <span>
            <Link to="/Register">Register</Link>
          </span>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
