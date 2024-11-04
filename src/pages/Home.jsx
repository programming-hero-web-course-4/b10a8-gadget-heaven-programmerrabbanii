import { useLoaderData} from "react-router-dom";
import { useState } from "react"; 
import Product from "../components/Product";
import Header from "../components/Header";

const Home = () => {
    const products = useLoaderData();
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    
    const filteredProducts = selectedCategory === "All" 
        ? products 
        : products.filter((product) => product.category === selectedCategory);

    return (
        <div className="bg-gray-50"> 
            <Header></Header>
            <p className="text-3xl py-16 text-center font-semibold">Explore Cutting-Edge Gadgets</p>
            <div className="flex mt-10 w-11/12 mx-auto gap-7">
                <div className="w-2/12 bg-white p-5 h-80 rounded-2xl">
                    
                    <div className="space-y-2 ">
                    <button 
                        onClick={() => handleCategoryChange("All")}
                        className={`w-full text-left px-4 py-1 rounded-full ${selectedCategory === "All" ? "bg-[#9538E2] text-white font-bold" : "bg-gray-100 text-gray-700"}`}>
                        All Products
                    </button> 
                    <button 
                        onClick={() => handleCategoryChange("Watches")}
                        className={`w-full text-left px-4 py-1 rounded-full ${selectedCategory === "Watches" ? "bg-[#9538E2] text-white font-bold" : "bg-gray-100 text-gray-700"}`}>
                        Smart Watches
                    </button>
                    <button 
                        onClick={() => handleCategoryChange("Computers")}
                        className={`w-full text-left px-4 py-1 rounded-full ${selectedCategory === "Computers" ? "bg-[#9538E2] text-white font-bold" : "bg-gray-100 text-gray-700"}`}>
                        Computers
                    </button>
                    <button 
                        onClick={() => handleCategoryChange("Phones")}
                        className={`w-full text-left px-4 py-1 rounded-full ${selectedCategory === "Phones" ? "bg-[#9538E2] text-white font-bold" : "bg-gray-100 text-gray-700"}`}>
                        Phones
                    </button>
                    <button 
                        onClick={() => handleCategoryChange("Chargers")}
                        className={`w-full text-left px-4 py-1 rounded-full ${selectedCategory === "Chargers" ? "bg-[#9538E2] text-white font-bold" : "bg-gray-100 text-gray-700"}`}>
                        Chargers
                    </button>
                    <button 
                        onClick={() => handleCategoryChange("Power Banks")}
                        className={`w-full text-left px-4 py-1 rounded-full ${selectedCategory === "Power Banks" ? "bg-[#9538E2] text-white font-bold" : "bg-gray-100 text-gray-700"}`}>
                        Power Banks
                    </button>
                    </div>
                </div>

                 {/* card for all category products */}
                <div className="w-10/12 grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between mb-10">
                    {filteredProducts.map((product) => (
                        <Product key={product.product_id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
