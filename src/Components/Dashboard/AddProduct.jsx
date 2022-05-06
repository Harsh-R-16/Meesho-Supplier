import React from "react";
import styled from "styled-components";
let categories = [
  "Women Ethnic",
  "Women Western",
  "Jewellery & Accessories",
  "Men",
  "Beauty & Health",
  "Bags & Footwear",
  "Home & Kitchen",
  "Kids",
  "Electronics",
];

export default function AddProduct() {
  let [details, setDetails] = React.useState({
    name: "Masai T-shirt",
    type: "Men",
    sprice: "400",
    aprice: "1000",
    img: "https://img.githubusercontent.com/",
  });

  const changeHandler = (e) => {
    let { id, value } = e.target;
    let temp = { ...details };
    temp[id] = value;
    setDetails(temp);
  };
  return (
    <Main>
      <h1>Add New Product</h1>
      <form action="">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          id="name"
          value={details["name"]}
          onChange={changeHandler}
        />
        <label htmlFor="type">Product Category</label>

        <select id="type" value={details["type"]} onChange={changeHandler}>
          {categories.map((category, index) => (
            <option value={category} key={index}>
              {category}{" "}
            </option>
          ))}
        </select>
        <label htmlFor="sprice">Selling Price</label>
        <input
          type="text"
          id="sprice"
          value={details["sprice"]}
          onChange={changeHandler}
        />
        <label htmlFor="aprice">Original Price</label>
        <input
          type="text"
          id="aprice"
          value={details["aprice"]}
          onChange={changeHandler}
        />
        <label htmlFor="img">Img URL</label>
        <input
          type="text"
          id="img"
          value={details["img"]}
          onChange={changeHandler}
        />
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

  input,
  select {
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
