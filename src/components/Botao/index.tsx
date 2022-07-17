import React from "react";
import style from "./Botao.module.scss";

type Props ={
  children: string
}

class Botao extends React.Component<Props> {
  render(): React.ReactNode {
    return <button className={style.botao}>{this.props.children}</button>;
  }
}

export default Botao;
