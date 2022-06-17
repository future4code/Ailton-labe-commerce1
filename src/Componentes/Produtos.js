import React from "react";
import styled from "styled-components";
import ProdutoCard from "./ProdutoCard";

const Container = styled.div`
  flex: 3;
`;

const FiltroContainer = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
`;

class Produtos extends React.Component {
  state = {
    ordernacao: "asc",
    produtos: [
      {
        id: 1,
        name: "Jupiter",
        value: 200000,
        imageUrl:
          "https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2018/12/14192245/jupiter-personare.png",
      },
      {
        id: 2,
        name: "Lua",
        value: 300000,
        imageUrl:
          "https://s.calendarr.com/upload/articles/lu/ac/lua-cheia-c.jpg?auto_optimize=low&width=640",
      },
      {
        id: 3,
        name: "Marte",
        value: 600000,
        imageUrl:
          "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/8465a67d00eda6b73b4485921e5fac7a.jpg",
      },
      {
        id: 4,
        name: "Sol",
        value: 1000000,
        imageUrl:
          "https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2020/08/sol-afinal-qual-e-sua-cor-conceitos-e-caracteristicas.jpg",
      },
    ],
  };

  adicionarProduto = (id) => {
    const produto = this.state.produtos.find((produto) => produto.id === id);

    if (produto) {
      this.props.adicionarProduto(produto);
    }
  };

  ajustarProdutos = () => {
    console.log(this.props.filtro);
    const { valorMinimo, valorMaximo, buscaNome } = this.props.filtro;
    console.log(valorMinimo);

    return this.state.produtos
      .sort((a, b) => {
        const { ordernacao } = this.state;

        if (a.value < b.value) {
          return ordernacao === "asc" ? -1 : 1;
        }

        if (a.value > b.value) {
          return ordernacao === "asc" ? 1 : -1;
        }

        return 0;
      })
      .filter((produto) => {
        let resultado = produto.value >= +valorMinimo;

        if (valorMaximo) {
          resultado = resultado && produto.value <= +valorMaximo;
        }

        if (!!buscaNome) {
          resultado = resultado && produto.name.match(buscaNome);
        }

        return resultado;
      });
  };

  render() {
    const produtos = this.ajustarProdutos();

    return (
      <Container>
        <FiltroContainer>
          <span> Quantidade de produtos: {produtos.length}</span>
          <div>
            <span style={{ marginRight: "10px" }}>Ordernação</span>
            <select
              onChange={(e) => this.setState({ ordernacao: e.target.value })}
            >
              <option value="asc">Crescente</option>
              <option value="desc">Decrescente</option>
            </select>
          </div>
        </FiltroContainer>
        <CardsContainer>
          {produtos.map((produto) => (
            <ProdutoCard
              key={produto.id}
              id={produto.id}
              name={produto.name}
              value={produto.value}
              imageUrl={produto.imageUrl}
              adicionarProduto={this.adicionarProduto}
            />
          ))}
        </CardsContainer>
      </Container>
    );
  }
}

export default Produtos;

/* na linha 73 e 74

produtos.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
});




*/
