import BaStatistics from "../components/BaStatistics";
import Navbar from "../components/Navbar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Statistice = () => {
    const gadgets = [
        { id: 1, name: "Smartphone Pro X", price: 999 },
        { id: 2, name: "UltraFit Smartwatch", price: 199 },
        { id: 3, name: "Wireless Charger Hub", price: 49 },
        { id: 4, name: "Noise Cancelling Headphones", price: 150 },
        { id: 5, name: "Bluetooth Speaker", price: 99 },
        { id: 6, name: "4K LED TV", price: 1200 },
        { id: 7, name: "Gaming Laptop", price: 1500 },
        { id: 8, name: "Smart Home Assistant", price: 129 },
        { id: 9, name: "Smart Thermostat", price: 250 },
        { id: 10, name: "Fitness Tracker", price: 59 }
    ];

    const chartData = gadgets.map(gadget => ({
        name: gadget.name,
        price: gadget.price
    }));
      
    return (
        <div className="w-11/12 mx-auto mt-9">
            <Navbar />
            <BaStatistics />

            <LineChart width={1000} height={400} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
};

export default Statistice;
