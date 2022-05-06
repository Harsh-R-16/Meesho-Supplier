import styled from "styled-components";

const Section = styled.section`
  table {
    border-collapse: collapse;
    margin: 25px auto;
  }
  th,
  td {
    flex-grow: 1;
    border: 1px solid rgb(207, 201, 201);
    text-align: left;
    padding: 10px;
  }
  tr:nth-last-of-type(2n) {
    background-color: rgb(245, 245, 245);
  }

  .remove {
    color: red;
  }
`;

export { Section };
