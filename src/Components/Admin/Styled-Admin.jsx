import styled from "styled-components";

const Section = styled.section`
  table {
    border-collapse: collapse;
    margin: 25px auto 40px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 0 10px 2px rgb(175, 175, 175);
  }
  thead > tr {
    color: #fff;
    background-color: #6c7ae0;
    th {
      padding: 20px 40px 20px 16px;
      font-weight: 500;
    }
  }
  th,
  td {
    text-align: left;
    padding: 16px;
    padding-right: 40px;
  }

  td {
    color: grey;
    font-size: 15px;
  }

  tr:nth-last-of-type(2n) {
    background-color: #f8f6ff;
  }

  .remove {
    color: red;
    cursor: pointer;
  }
`;

export { Section };
