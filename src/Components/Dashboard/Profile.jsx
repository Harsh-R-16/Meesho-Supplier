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
  ]);
  const changeHandler = (e) => {
    let { id, value } = e.target;
    let temp = [...details];
    temp[+id] = value;
    setDetails(temp);
  };
  return (
    <Main>
      <h1>Edit Details</h1>
      <hr />

      <form action="">
        <label htmlFor="0">Owner Name</label>
        <input type="text" id="0" value={details[0]} onChange={changeHandler} />
        <label htmlFor="1">Email ID</label>
        <input type="text" id="1" value={details[1]} onChange={changeHandler} />
        <label htmlFor="2">Mobile Number</label>
        <input id="2" value={details[2]} onChange={changeHandler} />
        <label htmlFor="3">Shop Name</label>
        <input id="3" value={details[3]} onChange={changeHandler} />
        <label htmlFor="4">Location</label>
        <input type="text" id="4" value={details[4]} onChange={changeHandler} />
        <button>Save Details</button>
      </form>
    </Main>
  );
}

const Main = styled.main`
  width: 400px;
  padding: 20px 20px 30px;
  margin: 70px auto;
  box-shadow: 1px 1px 6px 5px #e4e4e4;

  hr {
    border: none;
    border-bottom: 1px solid rgb(221, 221, 221);
    margin: 15px 0 20px;
  }

  h1 {
    font-size: 25px;
    font-weight: 500;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  input,
  select {
    padding: 3px 6px;
    margin: 8px 0 13px;
    border: none;
    border-bottom: 1px solid rgb(178, 178, 178);
    padding: 0 0 8px 6px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }

  button {
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    border: none;
    background-color: #f43397;
    color: #fff;
    font-weight: 500;
    border-radius: 3px;
  }
`;
