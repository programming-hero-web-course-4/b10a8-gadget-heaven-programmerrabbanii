const LatestProducts = () => {
    return (
        <div className="flex flex-wrap justify-center gap-6 mt-10">
         
            <div className="bg-white rounded-lg shadow-lg p-5 w-72">
                <img src="https://i.ibb.co.com/NVmqCSS/download-18.jpg" alt="Product 1" className="w-full h-40 object-cover rounded-lg  transition-transform transform hover:scale-110 hover:rotate-3 duration-300 ease-in-out mb-4" />
                <h2 className="text-xl font-bold mb-2">Smartphone Pro X</h2>
                <p className="text-gray-600 mb-4">
                    Discover the power of the latest Smartphone Pro X with an advanced camera, seamless performance, and stunning display.
                </p>
                <button className="btn btn-primary w-full">View Details</button>
            </div>

        
            <div className="bg-white rounded-lg shadow-lg p-5 w-72">
                <img src="https://i.ibb.co.com/r4hj7sQ/download-19.jpg" alt="Product 2" className="w-full h-40 object-cover rounded-lg  transition-transform transform hover:scale-110 hover:rotate-3 duration-300 ease-in-out mb-4" />
                <h2 className="text-xl font-bold mb-2">UltraFit Smartwatch</h2>
                <p className="text-gray-600 mb-4">
                    Stay fit and connected with the UltraFit Smartwatch, featuring health tracking, GPS, and extended battery life.
                </p>
                <button className="btn btn-primary w-full">View Details</button>
            </div>

           
            <div className="bg-white rounded-lg shadow-lg p-5 w-72">
                <img src="https://i.ibb.co.com/zXC6NR4/download-11.jpg" alt="Product 3" className="w-full h-40 object-cover rounded-lg  transition-transform transform hover:scale-110 hover:rotate-3 duration-300 ease-in-out mb-4" />
                <h2 className="text-xl font-bold mb-2">Wireless Charger Hub</h2>
                <p className="text-gray-600 mb-4">
                    Charge multiple devices effortlessly with the Wireless Charger Hub, offering fast charging for all compatible devices.
                </p>
                <button className="btn btn-primary w-full">View Details</button>
            </div>
        </div>
    );
};

export default LatestProducts;
