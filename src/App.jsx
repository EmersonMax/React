import React from 'react'
import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'

import Card from './components/layout/Card'

import ListaAlunos from './components/repeticao/ListaAlunos'
import ListaProdutos from './components/repeticao/ListaProdutos'

import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'

import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'

import Input from './components/formulario/Input'

import Contador from './components/contador/Contador'

import Mega  from './components/mega/mega'

export default (props) => {
    return (


        <div className="App">
            <div className="Head"><h1>Fundamentos React</h1></div>
            <div className="Cards">
            <Card titulo="#14 Mega Sena" color='#DB8024'>
                  <Mega/> 
                </Card>
            <Card titulo="#13 Componete contador" color='#24DB80'>
                   <Contador numeroInicial={10} > </Contador>
                </Card>
            <Card titulo="#12 Componete controlado" color='#8024DB'>
                   <Input/>
                </Card>
            <Card titulo="#11 Comunicação Indireta" color='#DB8024'>
                   <IndiretaPai/> 
                </Card>
            <Card titulo="#10 Comunicação Direta" color='#24DB80'>
                   <DiretaPai/> 
                </Card>
            <Card titulo="#9 Renderização condicional" color='#8024DB'>
                    <ParOuImpar numero={20}/>
                    <UsuarioInfo usuario={{nome:'Emerson '}}/>
                    <UsuarioInfo usuario={{email:'Emersonmax@live.com '}}/>
                </Card>
               
            <Card titulo="#8 Listas exercicio" color='#DB8024'>
                    <ListaProdutos/>
                </Card>
                <Card titulo="#7 Listas" color='#24DB80'>
                    <ListaAlunos/>
                </Card>
            <Card titulo=' #6 Componentes com Familia' color='#8024DB'><Familia sobrenome="max"/></Card>

                <Card titulo='#5 EXEMPLO DE CARD' color='#DB8024'>Conteudo de dentro do card</Card>

                <Card titulo="#4 SORTEIO DA MEGA SENA" color='#24DB80'>
                    <Aleatorio
                        min={1}
                        max={60}
                    />
                </Card>
                <Card titulo="#3 FRAGMENTOS" color='#8024DB'>
                    <Fragmento />
                </Card>

                <Card titulo="#2 COM PARAMENTROS" color='#DB8024'>
                    <ComParametro
                        titulo="Situação do aluno"
                        subtitulo="Emerson"
                        nota={9.3}
                    />
                </Card>

                <Card titulo=" #1 PRIMEIRO COMPONENTE" color='#24DB80'>
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )


}