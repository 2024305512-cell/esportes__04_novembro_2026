'use client'

import Lista from "@/components/Lista";
import { useState } from "react";

export default function Home() {
  const [esportes, setEsportes] = useState(['Futebol', 'Natação'])
  function adicionaEsporte(novoEsporte) {
    if (novoEsporte) {
      setEsportes(...esportes, novoEsporte)
    }
  }
  function removeEsporte(indice) {
    setEsportes(esportes.filter((esporte, i) => i != indice))
  }
  return (
    <div>
      <Lista titulo='Lista de Esportes' elementos={esportes}/>
    </div>
  );
}
