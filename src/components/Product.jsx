
const Product = ({product}) => {
    const {product_id,product_title,product_image,category,price,description,Specification,availability,rating}=product
    
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
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
    <button className="btn btn-outline rounded-full btn-secondary">View Details</button>

    </div> 
  </div>
</div>
            
        </div>
    );
};

export default Product;