import React from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from './Formulario.module.scss';

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
  state ={
      tarefa:"",
      tempo:"00:00"
  }

  adcionarTarefa(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}])
    console.log('state',this.state)
  }

  render(){
    return (
      <form className={style.novaTarefa} onSubmit={this.adcionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={event=>{this.setState({...this.state,tarefa: event.target.value})}}
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
            value={this.state.tempo}
            onChange ={event=>{this.setState({...this.state, tempo: event.target.value})}}
            min="00:00:00"
            max="01:30:00"
            required
            />
          </div>
        <Botao type="submit" >Adcionar</Botao>
      </form>
    );
  }
}

export default Formulario;