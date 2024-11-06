
import { useState } from "react";
import { getStoreReadList } from "../utility/addToDb";

const DashBannar = () => {
    const [activeTab, setActiveTab] = useState("cart"); 
    const cartItems = getStoreReadList();
    const wishlist = []; 

    const calculateTotalPrice = (items) => {
        return items.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div>
            <div className="bg-[#9538E2] text-center py-12 text-white">
                <h2 className="text-3xl font-semibold mb-2">Dashboard</h2>
                <p>
                    Explore the latest gadgets that will take your experience to
                    <br /> the next level. From smart devices to the coolest accessories, we have it all!
                </p>

                <div className="flex gap-5 justify-center mt-4">
                    <button 
                        className="bg-white py-2 px-9 font-semibold text-[#9538E2] rounded-full" 
                        onClick={() => setActiveTab("cart")}
                    >
                        Cart
                    </button>
                    <button 
                        className="py-2 px-9 border-2 rounded-full font-semibold" 
                        onClick={() => setActiveTab("wishlist")}
                    >
                        Wishlist
                    </button>
                </div>
            </div>

            {activeTab === "cart" && (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.product_id} className="mb-4 w-11/12 mx-auto mt-12">
                        
                  <div className="card card-side bg-base-100 shadow-xl items-center">
                    <figure>
                      <img 
                      className="w-80 h-80"
                        src={item.product_image}
                        alt="Movie" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{item.product_title}</h2>
                      <p>Description:{item.description}</p>
                      <p>Prices: {item.price}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary"><i class="fa-solid fa-trash"></i></button>
                      </div>
                    </div>
                  </div>
                  

                        </div>
                    ))}
                   
                </div>
            )}

            {activeTab === "wishlist" && (
                <div>
                    {wishlist.map((id) => {
                        const item = cartItems.find((i) => i.product_id === id);
                        return item ? (
                            <div key={item.product_id}>
                                

                            <div className="card card-side bg-base-100 shadow-xl w-11/12 mx-auto items-center">
                              <figure>
                                <img 
                                className="w-80 h-80"
                                  src={item.product_image}
                                  alt="Movie" />
                              </figure>
                              <div className="card-body">
                                <h2 className="card-title">{item.product_title}</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                  <button className="btn btn-primary">Watch</button>
                                </div>
                              </div>
                            </div>
                            </div>
                        ) : null;
                    })}
                </div>
            )}
        </div>
    );
};

export default DashBannar;
