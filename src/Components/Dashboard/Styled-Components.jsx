import styled from "styled-components";

const MainState = styled.main`
  padding: 20px 1.5vw;
  min-height: 90vh;

  article:nth-of-type(1) {
    margin: 25px;
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 34px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 18px;
    }

    div {
      padding: 25px 40px 20px;
      border-radius: 6px;
      background-color: #f0f4f8;

      :nth-of-type(1) {
        border-bottom: 4px solid rgb(233, 185, 73);
      }

      :nth-of-type(2) {
        border-bottom: 4px solid rgb(100, 122, 203);
      }

      :nth-of-type(3) {
        border-bottom: 4px solid #d66a6a;
      }

      :nth-of-type(4) {
        border-bottom: 4px solid #3b82f6;
      }

      h2 {
        font-weight: 500;
        font-size: 18px;
      }
    }
  }

  article:nth-of-type(2) {
    border: 1px solid rgb(198, 198, 198);
    display: flex;
    justify-content: space-between;
    padding: 20px 4vw;
    align-items: flex-end;
    margin-bottom: 50px;
    height: 400px;
    
    section {
      display: flex;
      flex-direction: column;

      div {
        background-color: #add8e6;
        transition:.25s linear
      }

      p {
        margin: 7px auto;
        font-weight: 500;
      }
    }
  }
  }
  > h1 {
    text-align: center;
    justify-content: center;
    margin: 50px 0 25px;
    font-size: 28px;

    + div {
      text-align: center;
      margin-bottom: 25px;

      > select {
        padding: 3px 8px;
      }
    }
  }
`;

const MainAllProducts = styled.main`
  h1 {
    font-size: 27px;
    margin-bottom: 50px;
    font-weight: 500;
  }
  margin: 50px 2vw;

  #products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 2vw 20px;
    @media (max-width: 720px) {
      justify-content: center;
    }
    div {
      width: 300px;
      margin: 0 10px;
      margin-bottom: 50px;
      box-shadow: 1px 1px 6px 1px #e3e3e3;
      border-radius: 5px;
      overflow: hidden;
      position: relative;
      padding-bottom: 4px;
      background-color: #f9f9f9;
      transition: 01s cubic-bezier(0.075, 0.82, 0.165, 1);
      &:hover {
        transform: scale(1.03);
        box-shadow: 1px 1px 10px 1px #d0d0d0;
      }
      .main-img {
        height: 360px;
        width: 100%;
        margin: 0;
        margin-bottom: 7px;
      }
    }
    .product-name {
      font-size: 17px;
      font-weight: 500;
      margin: 0 12px 9px;
    }
    .mkt {
      margin: 0 12px 6px;
      font-size: 12.5px;
      color: rgb(88, 88, 88);
    }
    .price {
      font-size: 19px;
      font-weight: bold;
      margin: 0 12px 6px;
      line-height: 160%;
    }
    .aprice {
      font-size: 15px;
      text-decoration: line-through;
      font-weight: normal;
      color: rgb(88, 88, 88);
      margin: 3px;
    }
    .discount {
      color: #038d63;
      font-size: 17px;
    }
    .firstorder {
      color: rgb(95, 94, 94);
      font-size: 15px;
      margin: 0 12px 14px;
      display: flex;
      align-items: center;
      img {
        height: 23px;
        aspect-ratio: 1;
        margin-right: 7px;
      }
    }
    .rating {
      margin: 0 12px 15px;
      display: flex;
      align-items: center;
      font-size: 12px;
      span {
        font-size: 15px;
        font-weight: 500;
        color: #fff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        width: fit-content;
        padding: 5.5px 11px;
        margin-right: 9px;
      }
      svg {
        margin-left: 7px;
      }
    }
    .meesho-trust {
      position: absolute;
      bottom: 12px;
      right: 13px;
    }
  }
`;

export { MainState, MainAllProducts };
