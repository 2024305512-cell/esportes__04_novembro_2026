'use client'

import { useState } from "react";

export default function FormAdicionarEsporte({adicionaEsporte}) {
    const [inputEsporte, setInputEsporte] = useState('')
    function handleInputEsporteChange(e) {
        setInputEsporte(e.target.value)
    }
    function handleButtonClick() {
        adicionaEsporte(inputEsporte)
    }
    function handleKeyUp(e) {
        if (e.key == 'Enter') {
            handleButtonClick()
        } else if (e.key == 'Escape') {
            setInputEsporte('')
        }
    }
  return (
    <div>
      Adicionar Esporte: <input type='text' value={inputEsporte} onChange={handleInputEsporteChange} onKeyUp={handleKeyUp}/>
      <button onClick={handleButtonClick}>Adicionar</button>
    </div>
  );
}
