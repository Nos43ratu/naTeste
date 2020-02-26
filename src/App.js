import React from "react";
import Shoartcut from "./components/nav/navshoartcats";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      navopen: false
    };
  }
  render() {
    return (
      <div className="app">
        <div className="nav">
          <div className="logo"></div>
          {this.state.navopen ? (
            <Shoartcut navtype={true} />
          ) : (
            <Shoartcut navtype={false} />
          )}
        </div>
        <div className="choosingmenu">
          <button
            className="choosebuttom"
            onClick={() => this.setState(state => ({ navopen: true }))}
          >
            Заказать торт
          </button>
          <button className="choosebuttom">Найти заказ</button>
        </div>
      </div>
    );
  }
}

export default App;
