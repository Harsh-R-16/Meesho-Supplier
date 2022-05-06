import React from "react";
import { Link } from "react-router-dom";
import { Main } from "./Styled-Login";

export default function Login() {
  return (
    <Main>
      <article>
        <img
          src="https://static.meeshosupply.com/supplier-new/meesho-logo-web.svg"
          alt=""
        />
      </article>
      <article>
        <form action="/dashboard">
          <h2>Login to your supplier panel</h2>
          <label htmlFor="email">Enter Your Email ID:</label>
          <input type="email" id="email" placeholder="Email" />
          <label htmlFor="password">Enter Your Password:</label>
          <input type="password" id="password" placeholder="Password" />
          <button>Log In</button>
          <p>Forgot Password?</p>
        </form>
        <h4>New to Meesho?</h4>
        <button>
          <Link to="/signup">Create your Supplier Account</Link>
        </button>
      </article>
    </Main>
  );
}
