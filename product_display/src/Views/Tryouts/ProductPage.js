import React from "react";
import { useParams, Link } from "react-router-dom";
import { useHttpGetRequest } from "../../Hooks/Tryouts/HTTPRequest";
import LoadingSpinner from "../../components/tryouts/CustomLoader";

function ProductPage() {
  let { id } = useParams();
  let htmlContent = null;
  let url = `https://5ed7490a152c310016d84d7c.mockapi.io/products/${id}`;
  let product = useHttpGetRequest(url);

  if (product.error) {
    htmlContent = <div>Sorry Please Try Again</div>;
  }

  if (product.loading) {
    htmlContent = (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (product.data) {
    htmlContent = (
      <div className="font-bold p-4">
        <h4 className="text-blue-500 text-2xl">{product.data.name}</h4>
        <h4 className="text-blue-800 text-2xl">{product.data.price}</h4>
        <div className="bg-cover">
          <img
            src={product.data.images[0].imageUrl}
            alt={product.data.name}
            style={{ width: "371px", height: "371px" }}
          />
        </div>
        <div className="text-blue-800 text-xl">{product.data.description}</div>
      </div>
    );
  }

  return (
    <div>
      <h4>Product Info</h4>
      {htmlContent}
      <Link to="/products">
        <div className="p-4 flex max-w-sm bg-blue-500 justify-center text-gray-400">
          BACK
        </div>
      </Link>
    </div>
  );
}

export default ProductPage;
