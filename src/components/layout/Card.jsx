import './Card.css'
import React from 'react'
export default function Card(props) {
    const cardstyle= {
        backgroundColor: props.color || '#5E32FA',
        borderColor: props.color || '#5E32FA'
    }
    return (
        <div className="Card" style={cardstyle}>
            <div className="Titulo">{props.titulo}</div>
            <p></p>
            <div className="Content"> {props.children} </div>

        </div>
    )

}