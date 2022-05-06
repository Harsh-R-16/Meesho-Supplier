import React from "react";
import styled from "styled-components";
// import "./Dashboard.css";

export default function Profile() {
  let [details, setDetails] = React.useState([
    "Harsh Gajera",
    localStorage.getItem("seller").replace(/ /g, "").toLocaleLowerCase() +
      "@gmail.com",
    7046581170,
    localStorage.getItem("seller"),
    "Mumbai",
    "",
  ]);
  const changeHandler = (e) => {
    let { id, value } = e.target;
    let temp = [...details];
    temp[+id] = value;
    setDetails(temp);
  };
  return (
    <Main>
      <h1>Your Profile</h1>
      <form action="">
        <label htmlFor="0">Owner Name</label>
        <input type="text" id="0" value={details[0]} onChange={changeHandler} />
        <label htmlFor="3">Shop Name</label>
        <input type="text" id="3" value={details[3]} onChange={changeHandler} />
        <label htmlFor="1">Email ID</label>
        <input type="text" id="1" value={details[1]} onChange={changeHandler} />
        <label htmlFor="2">Mobile Number</label>
        <input type="text" id="2" value={details[2]} onChange={changeHandler} />
        <label htmlFor="4">Location</label>
        <input type="text" id="4" value={details[4]} onChange={changeHandler} />
        <button>Save Changes</button>
      </form>
    </Main>
  );
}

const Main = styled.main`
  border: 1px solid #000;
  width: 400px;
  padding: 20px 20px 30px;
  margin: 70px auto;
  background-color: #f0f4f8;
  border: 1px solid rgb(184, 184, 184);
  box-shadow: 0 0 10px 3px #dbdbdb;

  h1 {
    font-size: 27px;
    font-weight: 500;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  input {
    padding: 3px 6px;
    margin: 8px 0 11px;
  }

  button {
    padding: 7px;
    font-size: 16px;
    margin-top: 20px;
    background-color: #fff;
    border: 1px solid rgb(184, 184, 184);
    font-weight: 500;
  }
`;
