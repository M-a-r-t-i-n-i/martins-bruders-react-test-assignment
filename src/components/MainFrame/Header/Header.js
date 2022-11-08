import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <section className="Menu">
          <menu>
            <button>Women</button>
            <button>Men</button>
            <button>Kids</button>
          </menu>
        </section>

        <section className="Logo">
          <p>the LOGO will be here</p>
        </section>

        <section className="CurrencySwitcher">
          <button>$ USD</button>
          <button>€ EUR</button>
          <button>¥ JPY</button>
        </section>
        <br></br>
        <section className="Cart">
          <button>CART</button>
        </section>
      </>
    );
  }
}
