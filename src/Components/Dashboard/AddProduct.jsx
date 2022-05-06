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
  let [color, setColor] = React.useState("#06A759");
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
  const clr = () => {
    if (color === "#06A759") {
      setColor("grey");
      return;
    }
    setColor("#06A759");
  };
  return (
    <Main>
      <h1>Add New Product</h1>
      <hr />
      <div>
        <svg
          width="28"
          height="28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          iconSize="20"
          className="Icon-sc-1iwi4w1-0 bpNwUI"
          style={{ marginRight: "13px" }}
        >
          <path
            d="M24.029 9.01v6.277L28 13.782 22.869.93a1 1 0 00-1.3-.558L0 9.011"
            fill="#56BB8A"
          ></path>
          <path
            d="M0 8.82h27a1 1 0 011 1v13.512a1 1 0 01-1 1H1a1 1 0 01-1-1V8.82z"
            fill="#56BB8A"
          ></path>
          <path
            d="M1.559 14.358c1.656-.35 2.952-1.265 3.447-2.435H23c.495 1.17 1.791 2.085 3.448 2.435v4.437c-1.657.35-2.953 1.265-3.448 2.435H5.006c-.496-1.17-1.791-2.085-3.447-2.435v-4.437z"
            fill="#91E5BD"
          ></path>
          <path
            d="M13.751 19.28c1.58 0 2.86-1.277 2.86-2.852a2.857 2.857 0 00-2.86-2.853 2.857 2.857 0 00-2.86 2.853 2.857 2.857 0 002.86 2.852z"
            fill="#56BB8A"
          ></path>
          <path
            d="M23.635 9.01L22.28 5.53l-.062-.153a4.018 4.018 0 01-3.5-1.501l-.154.062L6.296 9.01h17.34z"
            fill="#91E5BD"
          ></path>
          <path
            d="M7.28 16.998a.571.571 0 100-1.142.571.571 0 000 1.143zM19.865 16.998a.571.571 0 10.002-1.142.571.571 0 00-.002 1.143z"
            fill="#56BB8A"
          ></path>
        </svg>
        <p>Cash on Delivery</p>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          iconSize="20"
          className="Icon-sc-1iwi4w1-0 fvvrdU"
          onClick={clr}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM6.355 12.322l2.761 2.76 7.863-7.85A.793.793 0 1118.1 8.355l-8.42 8.413a.793.793 0 01-1.122 0l-3.326-3.324a.791.791 0 01.56-1.354c.211 0 .413.084.562.233z"
            fill={color}
          ></path>
        </svg>
      </div>
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
        <button>Add Product</button>
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
    margin: 20px 0;
  }

  div {
    display: flex;
    margin: 15px 0;
    align-items: center;
    p {
      flex-grow: 1;
    }
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
