import bMission from '../assets/bg-10.jpg';
const Mission = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 items-center'>
                <div>
                <img src={bMission} alt="" />

                </div>
                <div>
                    <h2 className='uppercase pb-5'>Mission</h2>
                    <h1 className='text-5xl capitalize font-semibold pb-5'>Statement</h1>

                    <p className="leading-8 text-lg">At GadgetHub, our mission is to innovate and redefine the future of technology by delivering high-quality, 
                    cutting-edge gadgets that elevate everyday life. We aim to make advanced technology accessible and affordable, 
                    empowering our customers to experience the future today.</p>

                    <p className='mt-8'>Gias Uddin  <span className='text-sm'>Manager</span></p>
                </div>
            </div>
            
        </div>
    );
};

export default Mission;