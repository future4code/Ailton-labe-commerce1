import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid black;
  margin-left: 15px;
  padding: 10px;
`;

class Carrinho extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <h3>CARRINHO: </h3>
        </div>

        <div>
          <p>recebe código de soma</p>
        </div>
        <p>Valor Total</p>
      </Container>
    );
  }
}

export default Carrinho;
