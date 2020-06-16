import React from "react";
import { useHttpGetRequest } from "../../../Hooks/Tryouts/HTTPRequest";

import ProductCard from "../../tryouts/ProductCard";
import LoadingSpinner from "../../tryouts/CustomLoader";

function Index() {
  let htmlContent = null;
  let url = `https://5ed7490a152c310016d84d7c.mockapi.io/products?page=4&limit=11`;
  let products = useHttpGetRequest(url);

  if (products.error) {
    htmlContent = <div>Sorry Please Try Again</div>;
  }

  if (products.loading) {
    htmlContent = (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (products.data) {
    htmlContent = (
      <div>
        {products.data.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <h4>Product Listings</h4>
      {htmlContent}
    </div>
  );
}

export default Index;
