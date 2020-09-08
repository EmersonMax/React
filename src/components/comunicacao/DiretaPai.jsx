import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho texto = "Emerson" numero={24} bool={true}></DiretaFilho>
            <DiretaFilho texto = "João" numero={50} bool={false}></DiretaFilho>
            <DiretaFilho texto = "Cassandra" numero={31} bool={true}></DiretaFilho>
        </div>
    )
}