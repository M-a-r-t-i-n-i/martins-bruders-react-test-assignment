import React from "react";

// I need to check if Header should be integrated in the Category component and other main components
// import Header from "./Header/Header";

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {/* <Header /> */}
        <section className="Title">
          <h1>Category name</h1>
        </section>
        <section className="Category">
          <image>here is an image/product</image>
          <button>add to cart</button>
          <p>description of image/product 1</p>
          <p>price of image/product 1</p>
        </section>
        <section className="Category">
          <image>here is an image/product</image>
          <button>add to cart</button>
          <p>description of image/product 2</p>
          <p>price of image/product 2</p>
        </section>
        <section className="Category">
          <image>here is an image/product</image>
          <button>add to cart</button>
          <p>description of image/product 3</p>
          <p>price of image/product 3</p>
        </section>
        <section className="Category">
          <image>here is an image/product</image>
          <button>add to cart</button>
          <p>description of image/product 4</p>
          <p>price of image/product 4</p>
        </section>
        <section className="Category">
          <image>here is an image/product</image>
          <button>add to cart</button>
          <p>description of image/product 5</p>
          <p>price of image/product 5</p>
        </section>
        <section className="Category">
          <image>here is an image/product</image>
          <button>add to cart</button>
          <p>description of image/product 6</p>
          <p>price of image/product 6</p>
        </section>
      </>
    );
  }
}
