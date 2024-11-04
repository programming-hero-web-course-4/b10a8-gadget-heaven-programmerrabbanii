import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import ProductDban from "./ProductDban";

const ProductsDetails = () => {
    const {detailsId}=useParams()
    const data=useLoaderData()
    
    const item = data.find(item => item.product_id ===(detailsId));
    console.log(item);
    const {product_id,product_title,product_image,category,price,description,Specification,availability,rating}=item

    return (
        <div>

            <Navbar></Navbar>
            <ProductDban></ProductDban>
          <div className="bg-gray-200">
          <div className="hero bg-white min-h-screen w-8/12  mx-auto relative -top-48 rounded-2xl">
  <div className="hero-content flex-col lg:flex-row">
    <img 
      src={product_image}
      className="  rounded-lg shadow-2xl w-6/12 h-full" />
    <div className="w-6/12">
      <h1 className="text-3xl font-semibold">{product_title}</h1>
      <h2>Prices: {price}</h2>
      <p>
        {
            availability? <button className="border-2 border-[#309C08] text-[#309C08] font-semibold  rounded-full py-1 px-4 "> in stock</button>: "out of stock"
        }
      </p>
      <p>{description}</p>
      <p className="py-6">
        <h2 className="text-2xl font-semibold">Specification </h2>
       
       {
        Specification.map((specifica,index)=> <ul> <li key={index}> {index+1}.{specifica}</li></ul>)
       }
       
      </p>

      <h3  className="font-semibold">Rating <i class=" text-orange-300 fa-regular fa-star"></i></h3>

      <h2><div className="rating my-4">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>  <button className="btn btn-xs ">4.4</button>
</h2>
      <div className="flex gap-5">
        <button className="bg-[#9538E2] text-white py-2 px-4 rounded-lg">Add To Card  <i class="fa-solid fa-cart-shopping"></i></button>
        <button><i class=" rounded-full border p-3 fa-regular fa-heart"></i></button>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
    );
};

export default ProductsDetails;