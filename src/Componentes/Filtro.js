import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin-right: 15px;
  flex: 1;
  padding: 10px;
`;

class Filtro extends React.Component {
  state = {
    valorMinimo: "",
    valorMaximo: "",
    buscaNome: "",
  };

  valorMinimoOnChange = (e) => {
    this.setState({ valorMinimo: e.target.value });
  };

  valorMaximoOnChange = (e) => {
    this.setState({ valorMaximo: e.target.value });
  };

  buscaNomeOnChange = (e) => {
    this.setState({ buscaNome: e.target.value });
  };

  render() {
    return (
      <Container>
        <h3>FILTROS</h3>
        <div>
          <span>Valor mínimo: </span>
          <input
            type="number"
            value={this.state.valorMinimo}
            onChange={this.valorMinimoOnChange}
          ></input>
        </div>
        <div>
          <span>Valor máximo: </span>
          <input
            type="number"
            value={this.state.valorMaximo}
            onChange={this.valorMaximoOnChange}
          ></input>
        </div>
        <div>
          <span>Busca por nome: </span>
          <input
            type="text"
            value={this.state.buscaNome}
            onChange={this.buscaNomeOnChange}
          ></input>
        </div>
      </Container>
    );
  }
}

export default Filtro;
