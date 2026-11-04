'use client'

import { useState } from "react";

export default function Home() {
  const [esportes, setEsportes] = useState([])
  function adicionaEsporte(novoEsporte) {
    if (novoEsporte) {
      setEsportes(setEsportes, novoEsporte)
    }
  }
  function removeEsporte(esporteApagar) {
    setEsportes(esportes.filter((esporteApagar, i) => i != indice))
  }
  return (
    <div>
      
    </div>
  );
}
