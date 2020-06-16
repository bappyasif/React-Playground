import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomLoader from "../CustomLoader";
import ProductCard from "../ProductCard";
import { useGetRequest } from "../../Hooks/HTTPRequest";

function Index() {
  let content = null;

  let url = `https://5ed7490a152c310016d84d7c.mockapi.io/products?page=1&limit=10`;

  let products = useGetRequest(url);

  if (products.error) {
    content = (
      <div className="font-bold text-center">
        <p>This Page Is Not Available At This Moment, Please Try Again Later</p>
      </div>
    );
  }

  if (products.loading) {
    content = (
      <div className="text-center">
        <CustomLoader />
      </div>
    );
  }

  if (products.data) {
    content = (
      <div>
        Some Data
        {products.data.map((product) => (
          <div key={product.id}>
            {" "}
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <h4>Top Products</h4>
      {content}
    </div>
  );
}

export default Index;

// function Index() {
//   let content = null;

//   let [products, setProducts] = useState({
//     loading: false,
//     data: null,
//     error: false,
//   });

//   let url = `https://5ed7490a152c310016d84d7c.mockapi.io/products?page=1&limit=10`;

//   useEffect(() => {
//     setProducts({
//       loading: true,
//       data: null,
//       error: false,
//     });
//     axios
//       .get(url)
//       .then((response) => {
//         console.log(response.data);
//         setProducts({
//           loading: false,
//           data: response.data,
//           error: false,
//         });
//       })
//       .catch(() => {
//         setProducts({
//           loading: false,
//           data: null,
//           error: true,
//         });
//       });
//   }, [url]);

//   if (products.error) {
//     content = (
//       <div className="font-bold text-center">
//         <p>This Page Is Not Available At This Moment, Please Try Again Later</p>
//       </div>
//     );
//   }

//   if (products.loading) {
//     content = (
//       <div className="text-center">
//         <CustomLoader />
//       </div>
//     );
//   }

//   if (products.data) {
//     content = (
//       <div>
//         Some Data
//         {products.data.map((product) => (
//           <div key={product.id}>
//             {" "}
//             <ProductCard product={product} />
//           </div>
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h4>Top Products</h4>
//       {content}
//     </div>
//   );
// }

// export default Index;
