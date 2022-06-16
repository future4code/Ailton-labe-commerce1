import React from "react";
import Filtro from "./Componentes/Filtro";
import Carrinho from "./Componentes/Carrinho";
import Produtos from "./Componentes/Produtos";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends React.Component {
  render(){

  
  return (
    <Container>
      <Filtro />
      <Produtos />
      <Carrinho />
    </Container>
  );
}
}

export default App;
