'use client'

import { useState } from "react";

export default function Home() {
  const [espotes, setEsportes] = useState([])
  function adicionaEsporte(novoEsporte) {
    if (novoEsporte) {
      setEsportes(...setEsportes, novoEsporte)
    }
  }
  function removeEsporte(esporteApagar) {
    setEsportes()
  }
  return (
    <div>
      
    </div>
  );
}
