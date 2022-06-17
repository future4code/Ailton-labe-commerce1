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

  adicionarProduto = (novoProduto) => {
    // verifica se o produto já foi inserido no carrinho, através do find
    // o find funciona da seguinte forma, retorna o primeir item encontrado dentro do array.
    // no caso abaixo, se o item for encontrado, retorna um objeto produto do state carrinho.
    let produto = this.state.carrinho.find(
      (produto) => produto.id === novoProduto.id
    );

    if (produto) {
      // se o produto foi inserido no carrinho anteriormente, deve somente atualizar este produto dentro do carrinho
      // Nós não queremos adicionar um novo produto no carrinho, por isso fazemos um map para atualizar a quantidade do produto adicionado
      // Além disso aproveitamos para calcular o valor total deste produto no carrinho
      const carrinhoAtualizado = this.state.carrinho.map((p) => {
        // caso o produto no carrinho seja o mesmo do produto adicionado
        if (p.id === produto.id) {
          // atualiza a quantidade atual somando mais um (1)
          p.quantidade = p.quantidade + 1;
          // atualiza o valor do produto somando com o valor do produto adicionado
          p.valor = p.valor + produto.value;
        }

        // Um map sempre retorna um array, ou seja, se o array tem 10 itens será retornado 10 itens como array
        // Com o map podemos atualizar os items conforme desejado.
        return p;
      });

      // Atualizamos o state carrinho com os itens atualizados
      this.setState({
        carrinho: carrinhoAtualizado,
      });
    } else {
      // caso for a primeira vez que o produto foi adicionado, segue o fluxo normal
      // cria um produto com a quantidade setado como 1
      produto = { ...novoProduto, quantidade: 1 };
      const novoCarrinho = [...this.state.carrinho, produto];
      // atualiza o state adicionando um novo produto
      this.setState({ carrinho: novoCarrinho });
    }
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
        <Carrinho
          produtos={this.state.carrinho}
          apagarViagem={this.apagarViagem}
        />
      </Container>
    );
  }
}

export default App;
