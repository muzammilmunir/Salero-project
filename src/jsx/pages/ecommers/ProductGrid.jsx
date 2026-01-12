import { Fragment } from "react";
import Products from "../../component/ecommers/Products";
import productData from "../../component/ecommers";


function ProductGrid() {
   return (
      <Fragment>
         <div className="container mh-auto">
            <div className="row">
               {productData.map((product, index) => (
                  <Products key={index} product={product} />
               ))}
            </div>
         </div>
      </Fragment>
   );
};

export default ProductGrid;
