import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';  
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import ProductDban from "./ProductDban";
import { addTostoreReadList, getStoreReadList } from "../utility/addToDb";
import { useState } from "react";

const ProductsDetails = () => {
    const { detailsId } = useParams();
    const data = useLoaderData();  

    const item = data.find(item => item.product_id === detailsId);
    if (!item) return <div>Product not found</div>; 

    const { product_id, product_title, product_image, price, description, Specification, availability } = item;

    const [wishlist, setWishlist] = useState([]);
    const [cartCount, setCartCount] = useState(getStoreReadList().length);

    const handleAddToCart = () => {
        addTostoreReadList(item);
        toast.success(`${item.product_title} has been added to your cart!`); 
        setCartCount(prevCount => prevCount + 1);
    };

    
    const addToWishlist = (item) => {
        if (!wishlist.includes(item.product_id)) {
            setWishlist([...wishlist, item.product_id]);
            toast.success(`${item.product_title} has been added to your wishlist!`); 
        } else {
            toast.error(`${item.product_title} is already in your wishlist!`); 
        }
    };

    return (
        <div>
            <Navbar cartCount={cartCount}></Navbar>
            <ProductDban></ProductDban>
            <div className="bg-gray-200">
                <div className="hero bg-white min-h-screen w-8/12 mx-auto relative -top-48 rounded-2xl">
                    <div className="hero-content flex-col lg:flex-row">
                        <img 
                            src={product_image}
                            className="rounded-lg shadow-2xl w-6/12 h-full" 
                            alt={product_title}
                        />
                        <div className="w-6/12">
                            <h1 className="text-3xl font-semibold">{product_title}</h1>
                            <h2>Prices: {price}</h2>
                            <p>
                                {availability ? 
                                    <button className="border-2 border-[#309C08] text-[#309C08] font-semibold rounded-full py-1 px-4">In Stock</button> : 
                                    "Out of Stock"
                                }
                            </p>
                            <p>{description}</p>
                            <p className="py-6">
                                <h2 className="text-2xl font-semibold">Specification</h2>
                                <ul>
                                    {Specification.map((specifica, index) => (
                                        <li key={index}>{index + 1}. {specifica}</li>
                                    ))}
                                </ul>
                            </p>
                            <h3 className="font-semibold">Rating <i className="text-orange-300 fa-regular fa-star"></i></h3>
                            <h2>
                                <div className="rating my-4">
                                    {[...Array(5)].map((_, index) => (
                                        <input 
                                            key={index} 
                                            type="radio" 
                                            name="rating-2" 
                                            className="mask mask-star-2 bg-orange-400" 
                                            defaultChecked={index === 4} 
                                        />
                                    ))}
                                </div>
                                <button className="btn btn-xs">4.4</button>
                            </h2>
                            <div className="flex gap-5">
                                <button onClick={handleAddToCart} className="bg-[#9538E2] text-white py-2 px-4 rounded-lg">Add to Cart <i className="fa-solid fa-cart-shopping"></i></button>
                                <button onClick={() => addToWishlist(item)} className="rounded-full border p-3"><i className="fa-regular fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div> 
    );
};

export default ProductsDetails;
