import React from "react";
import { FaLock } from "react-icons/fa";
import { Main, H1 } from "./Styled-Signup";
import img from "./form-img.png";
let temp = [160320, "harsh.gajera17@gmail.com", "harsh1234"];

export default function Signup() {
  let [data, setData] = React.useState({
    otp: "160320",
    email: "harsh.gajera17@gmail.com",
    password: "harsh1234",
  });
  let [inp, setInp] = React.useState("");
  const inpHandler = (e) => {
    if (inp === "") {
      setInp("+91 - " + e.target.value);
      return;
    }
    setInp(e.target.value);
  };
  console.log(inp.length);

  const dataHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const clcHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: temp[+e.target.id],
    });
  };
  return (
    <>
      <H1 id="title">Meesho Supplier Page</H1>
      <Main>
        <article id="first-article">
          <form action="/admin">
            <h1 id="selling-form-h1">Welcome to Meesho</h1>
            <p>Create your account to start selling</p>
            <div id="selling-form-inp">
              <input
                type="text"
                placeholder="Mobile Number"
                value={inp}
                onChange={inpHandler}
                maxLength={16}
                onClick={() => setInp("+91 - 7046581170")}
              />
              <button className={inp.length > 15 ? "active" : ""}>
                Send OTP
              </button>
            </div>
            <input
              type="text"
              placeholder="Enter OTP"
              className="input-text"
              name="otp"
              value={data.otp}
              onChange={dataHandler}
              onClick={clcHandler}
              id="0"
            />
            <input
              type="text"
              placeholder="Email ID"
              className="input-text"
              name="email"
              value={data.email}
              onChange={dataHandler}
              onClick={clcHandler}
              id="1"
            />
            <div id="selling-form-password">
              <input
                type="password"
                placeholder="Set Password"
                name="password"
                value={data.password}
                onChange={dataHandler}
                onClick={clcHandler}
                id="2"
              />
              <FaLock />
            </div>
            <ul>
              <li>Minimum 8 Characters</li>
              <li>1 Special Characters (@#$%!^&amp;*)</li>
              <li>1 Capital letter</li>
              <li>1 Number</li>
            </ul>
            <input type="checkbox" name="box" id="box" />{" "}
            <label htmlFor="box">
              I want to receive important updates on <span>Whatsapp</span>
            </label>
            <button>Create Account</button>
            <p>
              By clicking you agree to our <span>Terms &amp; Conditions</span>{" "}
              and <span>Privacy Policy</span>
            </p>
          </form>
        </article>
        <article id="second-article">
          <h3>Grow your business faster by selling on Meesho</h3>
          <img src={img} alt="" />
          <h4>All you need to sell on Meesho is </h4>
          <p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(56, 185, 122)", fontSize: "20px" }}
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
            </svg>
            GSTIN
          </p>
          <p>
            {" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(56, 185, 122)", fontSize: "20px" }}
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
            </svg>
            Bank Account
          </p>
        </article>
      </Main>
      <img
        src="https://supplier.meesho.com/panel/v2/new/static/c1763d1ca9a9043ec6abf7c8b0802a9f.png"
        alt=""
        id="footer-image"
      />
    </>
  );
}
