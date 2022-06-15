import React from 'react';
import Filtro from "./Componentes/Filtro";
import Carrinho from "./Componentes/Carrinho";
import PaginaProdutos from "./Componentes/PaginaProdutos"
import './App.css';

function App() {
  return (
    <div className="App">
      <Filtro></Filtro>


      <Carrinho></Carrinho>
    </div>
  );
}

export default App;
