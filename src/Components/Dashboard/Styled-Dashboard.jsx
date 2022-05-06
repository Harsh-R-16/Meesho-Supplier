import styled from "styled-components";

const Nav = styled.nav`
  padding: 17px 1.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f4f8;
  border-bottom: 1px solid rgb(184, 184, 184);
  box-shadow: 0 0 10px 3px #dbdbdb;

  > svg {
    font-size: 25px;
    margin-right: 10px;
  }

  h1 {
    font-weight: 500;
    font-size: 25px;
    color: rgb(37, 37, 37);
  }

  button {
    padding: 7px 10px;
    background-color: #fff;
    border: 1px solid #f43397;
    color: #f43397;
    font-size: 15px;
    display: flex;
    align-items: center;

    span {
      margin: 0 8px;
    }

    svg {
      font-size: 18px;
      :nth-of-type(2) {
        transform: translateY(-1.2px);
      }
    }
  }
`;

const Aside = styled.aside`
  position: absolute;
  top: 0;
  left: -100%;
  z-index: 10;
  width: 310px;
  box-sizing: border-box;
  height: 100vh;
  padding: 20px 30px;
  background-color: #f0f4f8;
  transition: 1s linear;
  background-color: #f1f5f8;

  #logo {
    display: flex;
    align-items: center;
    margin-bottom: 40px;

    svg {
      font-size: 25px;
      margin-right: 15px;
      transform: translateY(0);
    }

    span {
      font-size: 20px;
      color: #fff;
      background-color: #f43397;
      margin-right: 15px;
      border-radius: 2rem;
      padding: 7px 8.5px;
      padding-left: 10px;
      font-weight: 500;

      + svg {
        transform: translateY(-4px);
      }
    }
  }

  p {
    margin-bottom: 20px;
    font-size: 17px;
    svg {
      margin-right: 8px;
      font-size: 24px;
      transform: translateY(5px);
    }
  }
`;

export { Nav, Aside };
