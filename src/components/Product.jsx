import { Link } from "react-router-dom";

const Product = ({product}) => {
    const {product_id,product_title,product_image,category,price,description,Specification,availability,rating}=product
    
  
    return (
        <div>
            <div className="card bg-base-100  shadow-xl rounded-lg  p-5 w-72 transition-all transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
  <figure> 
    <img
    className="h-56  w-full object-cover"
      src={product_image}
      alt="Shoes" />
  </figure>
  <div className=" mt-2 mx-4 pb-6">
    <h2 className="card-title">{product_title}</h2>
    <p>Prices: {price}</p>
    <div className="card-actions justify-start mt-6">
  
  <Link to={`/details/${product_id}`}>
  <button   className="btn btn-outline rounded-full btn-secondary">View Details</button>
 
  </Link>

    </div> 
  </div>
</div>
            
        </div>
    );
};

export default Product;