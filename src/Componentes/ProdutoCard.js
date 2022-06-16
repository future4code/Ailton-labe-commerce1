import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 200px;
`;

const Content = styled.div`
  padding: 10px;
`;

const Image = styled.img`
  height: 200px;
  object-fit: cover;
`;

function ProdutoCard(props) {
  const { name, value, imageUrl } = props;
  return (
    <Container>
      <Image src={imageUrl} />
      <Content>
        <p>{name}</p>
        <p>R$ {value}</p>
        <button>Adicionar Viagem</button>
      </Content>
    </Container>
  );
}

export default ProdutoCard;
