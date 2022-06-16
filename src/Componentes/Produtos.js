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
    produtos: [
      {
        id: 1,
        name: "Viagem para jupter",
        value: 200000,
        imageUrl:
          "https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2018/12/14192245/jupiter-personare.png",
      },
      {
        id: 2,
        name: "Viagem para lua",
        value: 300000,
        imageUrl:
          "https://s.calendarr.com/upload/articles/lu/ac/lua-cheia-c.jpg?auto_optimize=low&width=640",
      },
      {
        id: 3,
        name: "Viagem para marte",
        value: 600000,
        imageUrl:
          "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/8465a67d00eda6b73b4485921e5fac7a.jpg",
      },
      {
        id: 4,
        name: "Viagem para o sol",
        value: 1000000,
        imageUrl:
          "https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2020/08/sol-afinal-qual-e-sua-cor-conceitos-e-caracteristicas.jpg",
      },
    ],
  };

  render() {
    return (
      <Container>
        <FiltroContainer>
          <span>Quantidade de produtos: {this.state.produtos.length}</span>
          <div>
            <span style={{ marginRight: "10px" }}>Ordernação</span>
            <select>
              <option value="crescente">Crescente</option>
              <option value="decrescente">Decrescente</option>
            </select>
          </div>
        </FiltroContainer>
        <CardsContainer>
          {this.state.produtos.map((produto) => (
            <ProdutoCard
              key={produto.id}
              name={produto.name}
              value={produto.value}
              imageUrl={produto.imageUrl}
            />
          ))}
        </CardsContainer>
      </Container>
    );
  }
}

export default Produtos;