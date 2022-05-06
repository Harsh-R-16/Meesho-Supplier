import React from "react";
import { FcBullish, FcDataSheet, FcLeave, FcTodoList } from "react-icons/fc";
import "./Dashboard.css";
import { MainState } from "./Styled-Components";
let mon = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const random = () => {
  let newArr = [];
  for (let i = 0; i < 12; i++) {
    newArr.push(Math.floor(Math.random() * 35) + 20);
  }
  return newArr;
};

export default function State() {
  const [arr, setArr] = React.useState(random());
  const [year, setYear] = React.useState(2022);
  const ordersHandler = (e) => {
    setYear(e.target.value);
    setArr(random());
  };

  return (
    <MainState>
      <article>
        <div>
          <h1>
            24
            <FcBullish />
          </h1>
          <h2>Pending Orders</h2>
        </div>
        <div>
          <h1>
            27
            <FcDataSheet />
          </h1>
          <h2>Orders Scheduled</h2>
        </div>
        <div>
          <h1>
            27
            <FcLeave />
          </h1>
          <h2>Returned Orders</h2>
        </div>
        <div>
          <h1>
            240
            <FcTodoList />
          </h1>
          <h2>Total Orders</h2>
        </div>
      </article>
      <h1 id="order-h1">Monthly Orders</h1>
      <div>
        <label htmlFor="year">Choose Year: </label>
        <select name="year" id="year" onChange={ordersHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>
      </div>
      <article id="orders">
        {arr.map((i, index) => (
          <section>
            <p>{i}</p>
            <div style={{ height: `${i * 6}px` }}></div>
            <p>
              {mon[index]} {year}
            </p>
          </section>
        ))}
      </article>
    </MainState>
  );
}
