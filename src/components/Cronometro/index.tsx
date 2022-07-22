import React, { useEffect, useState } from "react";
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from '../../types/tarefa'
interface Props{
  selecionado: ITarefa | undefined,
  finalizarTarefa:()=>void
}

export default function Cronometro({selecionado,finalizarTarefa}:Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if(selecionado?.tempo){
      setTempo(tempoParaSegundos(selecionado.tempo))
    }
  }, [selecionado])
    
  function regreciva(contador: number = 0){
    setTimeout(()=>{
      if(contador > 0){
        setTempo(contador -1);
        return regreciva(contador -1)
      }
      finalizarTarefa();
    },1000)
  }
  
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo}/>
      </div>
      <Botao onClick={()=>regreciva(tempo)}>Ligar</Botao>
    </div>
  );
};

