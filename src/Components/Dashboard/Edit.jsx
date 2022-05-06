import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
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

export default function Edit() {
  let { id } = useParams();
  let [details, setDetails] = React.useState({
    name: "Loading...",
    type: "Loading...",
    sprice: "Loading...",
    aprice: "Loading...",
    img: "Loading...",
  });

  React.useEffect(() => {
    fetch(`https://meeshodb.herokuapp.com/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((res) =>
        setDetails({
          name: res.data.name,
          type: res.data.type,
          sprice: res.data.sprice,
          aprice: res.data.aprice,
          img: res.data.img,
        })
      )
      .catch((err) => console.log(err));
  }, [id]);

  const changeHandler = (e) => {
    let { id, value } = e.target;
    let temp = { ...details };
    temp[id] = value;
    setDetails(temp);
  };
  return (
    <Main>
      <h1>Edit Product Details</h1>
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

/*
name: "Trendy Pretty Kurtis",
    type: "Women Ethnic",
    sprice: 410,
    aprice: 460,img
*/

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
