import { useLoaderData } from "react-router-dom";
import Product from "../components/Product";

const Home = () => {
    const products=useLoaderData()
    console.log(products);
    return (
        <div>
            <p className="text-3xl mt-16 text-center font-semibold">Explore Cutting-Edge Gadgets</p>
           <div className="flex mt-10 w-11/12 mx-auto">
            <div className="w-2/12">
                <h3>category</h3>
            </div>
            <div className="w-10/12 grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between">
                {
                    products.map((product)=> <Product key={product.product_id} product={product}></Product>)
                }
            </div>
           </div>
            
        </div>
    );
};

export default Home;