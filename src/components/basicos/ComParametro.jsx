import React from 'react'
export default function Comparamentro(props) {
  const status = props.nota >= 7 ? "aprovado" : "recuperação"
  return (<div>
    <h2>{props.titulo}</h2>
    <h3>{props.subtitulo} tem nota de {props.nota}</h3>
    <h4>Seu status é {status}</h4>
  </div>
  )
}