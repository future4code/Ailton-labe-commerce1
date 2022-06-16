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
  state = {
    carrinho: [],
  };

  adicionarProduto = (produto) => {
    const novoCarrinho = [...this.state.carrinho, produto];
    this.setState({ carrinho: novoCarrinho });
  };

  render() {
    return (
      <Container>
        <Filtro />
        <Produtos adicionarProduto={this.adicionarProduto} />
        <Carrinho produtos={this.state.carrinho} />
      </Container>
    );
  }
}

export default App;
