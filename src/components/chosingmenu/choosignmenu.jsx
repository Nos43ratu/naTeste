import React from "react";
import "./choosingmenu.css";

const Choosingmenu = () => (
  <div className="choosingmenu">
    <button
      className="choosebuttom"
      onClick={() => this.setState(state => ({ navopen: true }))}
    >
      Заказать торт
    </button>
    <button className="choosebuttom">Найти заказ</button>
  </div>
);
export default Choosingmenu;
