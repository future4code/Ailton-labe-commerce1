import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  border: 1px solid black;
  margin-left: 15px;
  padding: 10px;
`;

const CardProdutoAdd = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Quantidade = styled.input`
  width: 4vw;
  margin-right: 1vw;
`;

const Produto = styled.input`
  width: 16vw;
  margin-right: 1vw;
`;

const ButtonRemover = styled.button`
  display: flex;
  justify-content: center;
  width: 4vw;
`;

const CardProduto = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
class Carrinho extends React.Component {
  render() {
    const { produtos } = this.props;

    return (
      <Container>
        <div>
          <h3>CARRINHO: </h3>
        </div>

        {produtos.map((produto) => (
          <CardProduto>
            <span style={{ marginRight: "10px" }}>{produto.quantidade}x</span>
            <span>Produto {produto.name}</span>
            <button>Remover</button>
          </CardProduto>
        ))}

        {/* <CardProdutoAdd>
          <Quantidade placeholder={"Qtd"} />
          <Produto placeholder={"Produto"} />
          <ButtonRemover> Remover</ButtonRemover>
        </CardProdutoAdd> */}

        <div>
          <p>recebe código de soma</p>
        </div>
        <p>Valor Total</p>
      </Container>
    );
  }
}

export default Carrinho;
