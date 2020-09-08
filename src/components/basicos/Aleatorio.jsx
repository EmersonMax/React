import React from 'react'
export default function Aleatorio(props) {
    const sorteio_1 = Math.floor(Math.random() * props.max) + props.min;
    const sorteio_2 = Math.floor(Math.random() * props.max) + props.min;
    const sorteio_3 = Math.floor(Math.random() * props.max) + props.min;
    const sorteio_4= Math.floor(Math.random() * props.max) + props.min;
    const sorteio_5 = Math.floor(Math.random() * props.max) + props.min;
    const sorteio_6 = Math.floor(Math.random() * props.max) + props.min;
    return (<div>
        <h2>O resultado do sorteio da Mega Sena é</h2>
    <h3>{sorteio_1} , {sorteio_2} , {sorteio_3} , {sorteio_4} , {sorteio_5} , {sorteio_6}</h3>

    </div>
    )
}