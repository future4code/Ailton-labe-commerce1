import React from 'react'


class Filtro extends React.Components {
    state = {
        valorFiltro
    }

    render(){
        return(
            <div> 
                <h3>FILTROS</h3>
                <label> "Valor mínimo":
                    <input type="number" value="30.000"></input>
                </label>
                <label> "valor máximo"
                    <input type="number" value="90.000"></input>
                </label>
                <label> "Busca por nome:"
                    <input type="text" value="Viagem a"></input>
                </label>
            </div>
        )
    }
};

export default Filtro;