import { PureComponent } from "react";
import { Route, Routes } from "react-router-dom";

// API
import {
  ApiFetchAllCategories,
  ApiFetchAllCurrencies,
  ApifetchProductsByCategory,
  ApifetchProductById,
} from "./queries";

// Styling
import "./App.css";

// Components
import CartPage from "./components/cart/CartPage";
import NotFoundPage from "./components/ui/NotFoundPage";
import ProductListingPage from "./components/products/ProductListingPage";
import ProductCard from "./components/products/ProductCard";
import Header from "./components/MainFrame/Header/Header";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      currencies: [],
      products: [],
      nameAndDescription: [],
    };
  }

  async componentDidMount() {
    const { data } = await ApiFetchAllCategories();
    const { data: currencyData } = await ApiFetchAllCurrencies();
    const { data: productsData } = await ApifetchProductsByCategory("all");
    console.log("Data from ApiFetchAllCategories", data);

    console.log("2", productsData);
    this.setState({ categories: data.categories });
    this.setState({ currencies: currencyData.currencies });
    this.setState({ products: productsData.category.products });
    // this.setState({
    //   nameAndDescription: productsData.category.products.map(
    //     (product) => {{name: product.name, description: product.description}}
    //   ),
    // });
  }

  /* <li {...currency.symbol}>{currency.label}</li>
                    <li className="currency-counter">{currency.symbol}</li> */

  render() {
    console.log(this.state.products);
    console.log(this.state.nameAndDescription);
    return (
      <>
        <Header />
        <ul>
          {this.state.products.map((product) => (
            <ProductCard product={product} />
          ))}
        </ul>
        <ul>
          {this.state.categories.map((category) => (
            <div>{category.name}</div>
          ))}
        </ul>
        <select name="currency-switcher" id="currency-switcher">
          {this.state.currencies.map((currency) => (
            <option value={currency.label}>
              {currency.symbol} {currency.label}
            </option>
          ))}
        </select>
        <Routes>
          <Route path="/" element={<ul></ul>} />

          <Route path="/cart" element={"<CartPage />"} />
          {/* <Route path="/:productId" element={<ProductSingleView />} />
        <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </>
    );
  }
}

export default App;

// const dataExampleObject = {
//   categories: [
//     {__typeName: "Category", name: "all", id: {true: "all"}},
//   ]
// }

// dataExampleObject.categories[0].id.true

{
  /* {this.state.categories.map((category) => (
                <> */
}
{
  /* <li {...currency.symbol}>{currency.label}</li>
                  <li className="currency-counter">{currency.symbol}</li> */
}
{
  /* <li>{category.name}</li> */
}
{
  /* <li>{category.products}</li> */
}
{
  /* {category}[key].map((product)) => {
                    return(
                    <li key={product.id}>{product.description}</li>*/
}
