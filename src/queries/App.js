import { PureComponent } from "react";
import { Route, Routes } from "react-router-dom";

// API
import { ApiFetchAllCurrencies } from "./queries";

// Styling
import "./App.css";

// Components
import CartPage from "./components/cart/CartPage";
import NotFoundPage from "./components/ui/NotFoundPage";
import ProductListingPage from "./components/products/ProductListingPage";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      currencies: [],
      products: [],
    };
  }

  async componentDidMount() {
    const { data } = await ApiFetchAllCurrencies();
    this.setState({ currencies: data.currencies });
  }

  render() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <ul>
              {this.state.currencies.map((currency) => (
                <li>{currency.label}</li>
              ))}
            </ul>
          }
        />

        <Route path="/cart" element={<CartPage />} />
        {/* <Route path="/:productId" element={<ProductSingleView />} />
          <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    );
  }
}

export default App;
