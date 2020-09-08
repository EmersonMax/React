import React, {useState} from 'react'
import "./Input.css";
export default props =>{
    const [valor, setValor]=useState("Inicial")
    function quandoMudar(e){
        setValor(e.target.value)
    }
    return(
    <div className="Input">
        <h2>{valor}</h2>
        Define<input value={valor} onChange={quandoMudar} />
        não muda<input value={valor} readOnly />
        uncontrolled<input value={undefined} />
    </div>
    )
}