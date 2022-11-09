import "./App.css";
import React from "react";

// GraphQL
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";

// Components
import MainFrameClass from "./components/MainFrame/MainFrame";
import ButtonClass from "./components/MainFrame/Button/Button";
import Header from "./components/MainFrame/Header/Header";
import Category from "./components/MainFrame/Category";

// Constants
import { BUTTON_FUNCTIONALITY, LIMIT_IMPORT } from "./constants";

const testGQL = gql`
  query {
    currencies {
      label
      symbol
    }
    categories {
      name
      products {
        id
        name
        inStock
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        brand
        prices {
          amount
          currency {
            symbol
          }
        }
        gallery
      }
    }

    product(id: "apple-airtag") {
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
`;

const testGetProduct = gql`
  query product($productId: ID!) {
    product(id: $productId) {
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
`;

class App extends React.Component {
  render() {
    return (
      <main>
        {/* QUERY for testGetProduct  */}
        <Query query={testGetProduct}>
          {({ loading, error, data }) => {
            console.log(data);
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error}</p>;
            return data.product;
          }}
        </Query>
        {/* 
        // return data.product.map((product) => (
            //   <div key={product.id} value={product.name}></div>
            // ));

            // return data.product.map((product) => (
            //   <div key={product.id}>
            //     <div>{product.name}</div>
            //     <div>{product.description}</div>
            //   </div>
            // )); */}

        {/* QUERY RETURN BLOCK */}
        <Query query={testGQL}>
          {({ loading, error, data }) => {
            console.log(data);
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error}</p>;
            return data.categories.map((category) => (
              <>
                <div>{category.name}</div>
                {/* <div>{category.products}</div> */}
              </>
            ));
          }}
        </Query>
        <br></br>
        <br></br>
        <Query query={testGQL}>
          {({ loading, error, data }) => {
            console.log(data);
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error}</p>;
            return data.currencies.map((currency) => (
              <>
                <div>{currency.label}</div>
                <div>{currency.symbol}</div>
              </>
            ));
          }}
        </Query>
        <br></br>
        <br></br>
        <Query query={testGQL}>
          {({ loading, error, data }) => {
            console.log(data);
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error}</p>;
            return data.product["name"];
          }}
        </Query>
        <br></br>
        <br></br>
        <Query query={testGQL}>
          {({ loading, error, data }) => {
            console.log(data);
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error}</p>;
            return data.product["gallery"];
          }}
        </Query>
        <br></br>
        <br></br>
        <Query query={testGQL}>
          {({ loading, error, data }) => {
            console.log(data);
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error}</p>;
            return data.product["category"];
          }}
        </Query>
        <br></br>
        <br></br>
        <Query query={testGQL}>
          {({ loading, error, data }) => {
            console.log(data);
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error}</p>;
            return data.product["brand"];
          }}
        </Query>
        <br></br>
        <br></br>
        <Query query={testGQL}>
          {({ loading, error, data }) => {
            console.log(data);
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error}</p>;

            return data.product["description"];

            // return data.product.map((product) => (
            //   <div key={product.id} value={product.name}></div>
            // ));

            // return data.product.map((product) => (
            //   <div key={product.id}>
            //     <div>{product.name}</div>
            //     <div>{product.description}</div>
            //   </div>
            // ));
          }}
        </Query>

        <section className="App">
          <Header />

          <Category />
          <header className="App-header">
            <p>dispersed functionalities below </p>
          </header>
        </section>
        <section className="MainFrame">
          <MainFrameClass type="Zen" counter={0} limit={LIMIT_IMPORT} />
          <ButtonClass
            type="functionality"
            functionality={BUTTON_FUNCTIONALITY}
          />
        </section>
      </main>
    );
  }
}

export default App;
