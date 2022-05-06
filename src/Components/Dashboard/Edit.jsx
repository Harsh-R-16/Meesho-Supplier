import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
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
  let { id } = useParams();
  let navigate = useNavigate();

  let [details, setDetails] = React.useState({
    name: "Loading...",
    type: "Loading...",
    sprice: 0,
    aprice: 0,
    img: "Loading...",
  });

  React.useEffect(() => {
    fetch(`
https://meeshodb.herokuapp.com/api/v1/products/${id}`).then((res) =>
      res.json().then((res) => {
        console.log(res);
        setDetails(res.data);
      })
    );
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
  };

  const clickHandler = async (e) => {
    if (e.target.innerHTML === "Save Details") {
      try {
        const a = await fetch(
          `https://meeshodb.herokuapp.com/api/v1/products/${id}`,
          {
            method: "PATCH",
            body: JSON.stringify(details),
            headers: { "Content-Type": "application/json" },
          }
        );
        const b = await a.json();
        console.log(b);
      } catch (err) {
        alert("Product Updated!!!");
      }
      navigate("/dashboard/all-products");
    } else {
      try {
        const a = await fetch(
          `https://meeshodb.herokuapp.com/api/v1/products/${id}`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }
        );
        const b = await a.json();
        console.log(b);
      } catch (err) {
        alert("Product Deleted!!!");
      }
      navigate("/dashboard/all-products");
    }
  };

  const changeHandler = (e) => {
    let { id, value } = e.target;
    let temp = { ...details };
    temp[id] = value;
    setDetails(temp);
  };

  return (
    <Main>
      <h1>Edit Product</h1>
      <hr />

      <form action="" onSubmit={submitForm}>
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
          type="number"
          id="sprice"
          value={details["sprice"]}
          onChange={changeHandler}
        />
        <label htmlFor="aprice">Original Price</label>
        <input
          type="number"
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
        <button onClick={clickHandler}>Save Details</button>
        <button onClick={clickHandler}>Delete Product</button>
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
