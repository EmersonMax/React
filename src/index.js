
import ReactDOM from 'react-dom'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import App from './App'
const el = document.getElementById('root')
const tag = <strong> Olá mundo React</strong>

ReactDOM.render(<App />, el)
