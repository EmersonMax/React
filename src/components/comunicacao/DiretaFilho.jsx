import React from 'react'

export default props => {
    return (
        <div>
            <div><b>Nome:</b>{props.texto}</div>
            <div>Idade:{props.numero}</div>
            <div>Nerd?{props.bool ? "Sim": "Não"}!</div>
        </div>
    )
}