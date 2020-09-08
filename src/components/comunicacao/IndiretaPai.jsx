import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    

    function fornecerInformacoes (nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(false)
    }
    return (
        <div>
            <div>{nome}</div>
            <div>{idade}</div>
            <div>{nerd}</div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}/>
        </div>
    )
}