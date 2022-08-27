import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaAlignLeft, FaCaretDown } from "react-icons/fa";
import { Nav } from "../Dashboard/Styled-Dashboard";
import { FcBullish, FcDataSheet, FcLeave, FcTodoList } from "react-icons/fc";
import "./Admin.css";
import { MainState } from "../Dashboard/Styled-Components";
import { Section } from "./Styled-Admin";
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
    newArr.push(Math.floor(Math.random() * 50) + 120);
  }
  return newArr;
};

export default function Admin() {
  const [arr, setArr] = React.useState(random());
  const [year, setYear] = React.useState(2022);
  const [users, setUsers] = React.useState([]);
  const [sellers, setSellers] = React.useState([]);
  const [visitors, setVisitors] = React.useState("counting...");
  const ordersHandler = (e) => {
    setYear(e.target.value);
    setArr(random());
  };

  useEffect(() => {
    fetch("https://meeshodb.herokuapp.com/api/v1/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.data);
      });
  }, []);

  useEffect(() => {
    fetch("https://meeshodb.herokuapp.com/api/v1/products")
      .then((res) => res.json())
      .then((res) => {
        let arr = {};
        let temp = [];
        for (let i = 0; i < res.data.length; i++) {
          if (arr[res.data[i].soldBy]) arr[res.data[i].soldBy]++;
          else arr[res.data[i].soldBy] = 1;
        }
        for (let key in arr) {
          temp.push([key, arr[key]]);
        }
        setSellers(temp);
      });
  }, []);

  useEffect(() => {
    fetch("https://meeshodb.herokuapp.com/visitors")
      .then((res) => res.json())
      .then((res) => {
        setVisitors(res.visitors);
      });
  }, []);

  const removeUser = (index) => {
    let temp = [...users];
    temp.splice(index, 1);
    setUsers(temp);
  };

  const removeSeller = (index) => {
    let temp = [...sellers];
    temp.splice(index, 1);
    setSellers(temp);
  };

  return (
    <main id="admin">
      <Nav>
        <FaAlignLeft />
        <h1>Admin Dashboard</h1>
        <button>
          <MdOutlineAdminPanelSettings />
          <span>
            <Link to="/dashboard">Supplier</Link>
          </span>
          <FaCaretDown />
        </button>
      </Nav>
      <MainState>
        <article>
          <div>
            <h1>
              240
              <FcBullish />
            </h1>
            <h2>Pending Orders</h2>
          </div>
          <div>
            <h1>
              275
              <FcDataSheet />
            </h1>
            <h2>Orders Scheduled</h2>
          </div>
          <div>
            <h1>
              75
              <FcLeave />
            </h1>
            <h2>Returned Orders</h2>
          </div>
          <div>
            <h1>
              560
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
            <section key={index}>
              <p>{i}</p>
              <div style={{ height: `${i * 2}px` }}></div>
              <p>
                {mon[index]} {year}
              </p>
            </section>
          ))}
        </article>
      </MainState>
      <h2
        style={{ textAlign: "center", marginBottom: "30px", fontWeight: "500" }}
      >
        Total Visitors on Website: {visitors}
      </h2>
      <h1 style={{ fontWeight: "500" }}>All Users</h1>
      <Section id="users">
        <table>
          <thead>
            <tr>
              <th>*</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Join Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ name, email, password }, index) => (
              <tr>
                <td>{index + 1}.</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>******</td>
                <td>0{Math.ceil(Math.random() * 8)}/05/2022</td>
                <td
                  className="remove"
                  onClick={() => {
                    removeUser(index);
                  }}
                >
                  Remove
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
      <h1 style={{ fontWeight: "500" }}>All Sellers</h1>
      <Section id="sellers">
        <table>
          <thead>
            <tr>
              <th>*</th>
              <th>Name</th>
              <th>Total Products</th>
              <th>Total Sell</th>
              <th>Join Date</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((i, index) => (
              <tr
                onClick={() => {
                  removeSeller(index);
                }}
              >
                <td>{index + 1}.</td>
                <td>{i[0]}</td>
                <td>{i[1]}</td>
                <td>{Math.ceil(Math.random() * 200) + 100}</td>
                <td>{Math.ceil(Math.random() * 20) + 10}/04/2022</td>
                <td
                  onClick={() => {
                    localStorage.setItem("seller", i[0]);
                  }}
                >
                  <Link to={`/dashboard`} style={{ color: "green" }}>
                    Go to details
                  </Link>
                </td>
                <td className="remove">Remove</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </main>
  );
}
