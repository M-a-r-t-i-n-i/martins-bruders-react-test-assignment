import React from "react";

class ProductCard extends React.Component {
  render() {
    return (
      <div className="product-card">
        <h3>{this.props.product.name}</h3>
        <img
          src={this.props.product.gallery[0]}
          alt=""
          height="200"
          width="200"
        />
        <p>{this.props.product.gallery[0]}</p>
        <p>{this.props.product.inStock ? "in Stock" : "sold out"}</p>
      </div>
    );
  }
}

export default ProductCard;
