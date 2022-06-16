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

  /*  
  apagarViagem = viagemId => {
    const novoCarrinho = this.state.carrinho.filter(produto => {
      return viagemId !== viagem.id;
    });

    this.setState({ carrinho: novoCarrinho });
  };
  */

  render() {
    return (
      <Container>
        <Filtro />
        <Produtos adicionarProduto={this.adicionarProduto} />
        <Carrinho produtos={this.state.carrinho} /*, apagarViagem={this.apagarViagem}, quantidaCarrinho = {this.state.carrinho.length}   */ />
      </Container>
    );
  }
}

export default App;
