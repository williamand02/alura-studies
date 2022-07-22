import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import {v4 as uuidv4} from 'uuid';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario ({ setTarefas }:Props){
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");

  function adcionarTarefa(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    setTarefas(tarefasAntigas => 
      [...tarefasAntigas, 
        {
          tarefa,
          tempo,
          selecionado:false,
          completado:false,
          id: uuidv4()
        }
      ]
      );
    setTarefa("");
    setTempo("00:00");
  }

    return (
      <form className={style.novaTarefa} onSubmit={adcionarTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={tarefa}
            onChange={event=>{setTarefa(event.target.value)}}
            // onChange={event=>{this.setState({...this.state,tarefa: event.target.value})}}
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            value={tempo}
            onChange ={event=>{setTempo(event.target.value)}}
            min="00:00:00"
            max="01:30:00"
            required
            />
          </div>
        <Botao type="submit" >Adcionar</Botao>
      </form>
    );
}

export default Formulario;