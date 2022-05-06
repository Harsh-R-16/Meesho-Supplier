import styled from "styled-components";

const Main = styled.main`
  position: sticky;
  top: 0;

  svg {
    width: 120px;
  }

  nav {
    background-color: #fff;
    padding: 20px 2vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      justify-content: space-between;
      margin: 0 1vw;
      width: 850px;
    }

    p {
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }

    h1 {
      text-align: center;
      background-color: #f43397;
      color: #fff;
      padding: 13px;
      font-size: 22px;
      font-weight: 500;
    }

    button {
      padding: 12px 30px;
      font-size: 16px;
      border-radius: 5px;
      color: white;
      background-color: #f43397;
      border: 1px solid #f43397;
      transition: background-color 0.2s linear;

      :nth-of-type(1) {
        color: #f43397;
        background-color: white;
        border: 1px solid #f43397;
      }
    }
  }

  h1 {
    text-align: center;
    background-color: #f43397;
    color: #fff;
    padding: 13px;
    font-size: 22px;
    font-weight: 500;
    position: sticky;
    top: 0;
    z-index: 10;
  }
`;

const Article = styled.article`
  background-color: #fdf7f9;
  display: grid;
  grid-template-columns: 1fr 1fr;

  + img {
    width: 100%;
    margin: 20px 0;
  }

  img {
    height: 470px;
    width: 750px;
  }

  div {
    padding: 70px 20px 0 120px;
  }

  h1 {
    font-size: 30px;
    line-height: 135%;
    margin-bottom: 20px;
    color: rgb(34, 34, 34);

    span {
      color: #f43397;
    }
  }

  #form-para {
    width: 90%;
    display: flex;
    align-items: center;
    margin: 18px 0;
    padding-left: 10px;
    border: 1px solid rgb(187, 187, 187);
    border-radius: 5px;
    overflow: hidden;

    button {
      background-color: #f43397;
      color: #fff;
      border: none;
      padding: 12px 30px;
      font-size: 15px;
    }

    input {
      flex-grow: 1;
      border: none;
      background-color: inherit;
      margin: 0 13px 0 10px;

      :focus {
        outline: none;
      }
    }
  }
`;

const Section = styled.section`
  padding: 30px 6vw;

  h1 {
    text-align: center;

    + p {
      text-align: center;
      margin: 15px;
    }
  }

  #grid-view {
    margin: 40px 8vw;
    display: grid;
    grid-template-columns: 1fr 1fr;

    div {
      margin: 20px;
      border-radius: 6px;
      padding: 15px;
      box-shadow: 0 0 15px 3px rgb(225, 224, 224);

      h2 {
        font-size: 20px;
        margin-bottom: 6px;
        font-weight: 500;
        display: flex;
        align-items: center;

        svg {
          margin-left: 6px;
          font-size: 24px;
        }
      }
    }
  }

  div p {
    font-size: 14px;
    letter-spacing: 1.5px;
    line-height: 1.45;
    color: rgb(97, 97, 97);
  }
`;

export { Main, Article, Section };
