import styled from "styled-components";

const Main = styled.main`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  padding: 50px;
  flex-wrap: wrap;

  + #footer-image {
    height: 150px;
    width: 99vw;
  }

  article {
    width: 420px;
    padding: 10px;
    margin: 0 50px;

    #selling-form-h1 {
      font-size: 28px;

      + p {
        font-size: 14.5px;
        margin: 8px 0 15px;
      }
    }
    #selling-form-inp {
      display: flex;
      margin: 12px 0;

      button {
        color: #f43397;
        background-color: #fff;
        border: 1px solid #f43397;
        padding: 7px 10px;
      }

      input {
        flex-grow: 1;
        margin-right: 15px;
        padding: 7px 9px;
      }
    }

    .input-text {
      width: 94.6%;
      padding: 7px 9px;
      margin: 12px 0;
    }

    #selling-form-password {
      border: 1px solid #000;
      padding: 8px 9px;
      margin: 12px 0;
      display: flex;

      input {
        border: none;
        flex-grow: 1;
        &:focus {
          outline: none;
        }
      }
    }
  }

  ul {
    font-size: 13px;
    padding-left: 20px;
    margin-bottom: 12px;

    li {
      margin: 7px 0;
    }
  }

  #box + label {
    font-size: 14px;

    span {
      color: #f43397;
      font-weight: bold;
    }
  }

  label + button {
    margin: 50px 0 15px;
    width: 100%;
    font-weight: 500;
    padding: 13px 0;
    color: white;
    background-color: #f43397;
    border: none;

    + p {
      font-size: 10px;
      text-align: center;
      span {
        color: #f43397;
        font-weight: 500;
      }
    }
  }
  .active {
    background-color: #f43397 !important;
    color: white !important;
  }

  img {
    width: 140%;
    margin: 50px 0;
  }

  h4 {
    margin: 15px 0;
  }

  p > svg {
    margin-right: 10px;
    transform: translateY(4px);
  }
`;

const H1 = styled.h1`
  text-align: center;
  background-color: #f43397;
  color: #fff;
  padding: 13px;
  font-size: 22px;
  font-weight: 500;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export { Main, H1 };
