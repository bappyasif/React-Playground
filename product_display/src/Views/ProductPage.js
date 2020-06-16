import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CustomLoader from "../components/CustomLoader";
import { useGetRequest } from "../Hooks/HTTPRequest";
import BackNavigation from "../components/BackNavigation";

function ProductPage() {
  let content = null;
  let { id } = useParams();
  let url = `https://5ed7490a152c310016d84d7c.mockapi.io/products/${id}`;

  let product = useGetRequest(url);

  if (product.error) {
    content = (
      <div className="font-bold text-center">
        <p>Products Display Not Available Please Try Again Later</p>
      </div>
    );
  }

  if (product.loading) {
    content = (
      <div>
        <CustomLoader />
      </div>
    );
  }

  if (product.data) {
    content = (
      <div>
        <h4>{product.data.name}</h4>
        <div>
          <img src={product.data.images[1].imageUrl} alt={product.data.name} />
        </div>
        <div className="font-bold text-2xl mb-4">{product.data.price}</div>
        <div>
          <p>{product.data.description}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h4> Product Page</h4>
      {content}
      <Link to="/">
        <BackNavigation />
      </Link>
    </div>
  );
}

export default ProductPage;

// function ProductPage() {
//   let content = null;
//   let { id } = useParams();

//   let [product, setProduct] = useState({
//     loading: false,
//     data: null,
//     error: false,
//   });
//   let url = `https://5ed7490a152c310016d84d7c.mockapi.io/products/${id}`;

//   useEffect(() => {
//     setProduct({
//       loading: true,
//       data: null,
//       error: false,
//     });
//     axios
//       .get(url)
//       .then((response) => {
//         console.log(response.data);
//         setProduct({
//           loading: false,
//           data: response.data,
//           error: false,
//         });
//       })
//       .catch(() => {
//         setProduct({
//           loading: false,
//           data: null,
//           error: true,
//         });
//       });
//   }, [url]);

//   if (product.error) {
//     content = (
//       <div className="font-bold text-center">
//         <p>Products Display Not Available Please Try Again Later</p>
//       </div>
//     );
//   }

//   if (product.loading) {
//     content = (
//       <div>
//         <CustomLoader />
//       </div>
//     );
//   }

//   if (product.data) {
//     content = (
//       <div>
//         <h4>{product.data.name}</h4>
//         <div>
//           <img src={product.data.images[1].imageUrl} alt={product.data.name} />
//         </div>
//         <div className="font-bold text-2xl mb-4">{product.data.price}</div>
//         <div>
//           <p>{product.data.description}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h4> Product Page</h4>
//       {content}
//     </div>
//   );
// }

// export default ProductPage;

// function ProductPage() {
//   let content = null;
//   let { id } = useParams();

//   let [product, setProduct] = useState(null);
//   let url = `https://5ed7490a152c310016d84d7c.mockapi.io/products/${id}`;

//   useEffect(() => {
//     axios.get(url).then((response) => {
//       console.log(response.data);
//       setProduct(response.data);
//     });
//   }, [url]);

//   if (product) {
//     content = (
//       <div>
//         <h4>{product.name}</h4>
//         <div>
//           <img src={product.images[1].imageUrl} alt={product.name} />
//         </div>
//         <div className="font-bold text-2xl mb-4">{product.price}</div>
//         <div>
//           <p>{product.description}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h4> Product Page</h4>
//       {content}
//     </div>
//   );
// }

// export default ProductPage;
