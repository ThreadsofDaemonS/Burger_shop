import React from "react";
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import sampleBurgers from "../sample-burgers";
import Burger from "./Burger";

class App extends React.Component {
  state = {
    burgers: {},
    order: {},
  };

  addBurger = (burger) => {
    const burgers = { ...this.state.burgers };
    burgers[`burger${Date.now}`] = burger;
    this.setState({ burgers });
  };

  loadSampleBurgers = () => {
    this.setState({ burgers: sampleBurgers });
  };

  addToOrder = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };
  render() {
    return (
      <div className="burger-paradise">
        <div className="menu">
          <Header />
          <ul className="burgers">
            {Object.keys(this.state.burgers).map((key) => {
              return (
                <Burger
                  addToOrder={this.addToOrder}
                  key={key}
                  index={key}
                  details={this.state.burgers[key]}
                />
              );
            })}
          </ul>
        </div>
        <Order />
        <MenuAdmin
          loadSampleBurgers={this.loadSampleBurgers}
          addBurger={this.addBurger}
        />
      </div>
    );
  }
}

export default App;
