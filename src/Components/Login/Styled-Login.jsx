import styled from "styled-components";

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;

  article {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    :nth-of-type(1) {
      background: linear-gradient(to right, #f64976, #ff85c0);
    }

    :nth-of-type(2) form {
      width: 380px;
      padding: 22px;
      box-sizing: border-box;
      border-radius: 7px;
      box-shadow: 0 0 15px 3px rgb(225, 224, 224);
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 19px;
        font-weight: 500;
        color: #282828;
        margin-bottom: 5px;
      }

      button {
        margin: 25px 0 15px;
        background-color: #f43397;
        color: #fff;
        border: none;
        padding: 8px;
        font-size: 16px;
        border-radius: 3px;
      }

      label {
        font-weight: 500;
        font-size: 13px;
        margin: 14px 0 12px;
      }

      input {
        padding: 5px 7px;
        font-size: 13.5px;
        cursor: pointer;
        border: 1px solid rgb(216, 216, 216);

        :focus {
          outline: none;
          font-size: 14px;
        }
      }

      + h4 {
        margin: 25px 0 0;
      }

      p {
        color: blue;
        text-align: center;
        font-size: 14px;
        display: block;
        margin: 7px;
        cursor: pointer;
      }
    }

    h4 + button {
      margin: 0;
      width: 350px;
      margin: 25px 0;
      background-color: #fff;
      border: 1px solid #f43397;
      padding: 8px;
      font-size: 14px;
      border-radius: 3px;
    }
  }
`;

export { Main };
