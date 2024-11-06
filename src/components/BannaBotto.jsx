import btopimg from '../assets/bg-9.jpg';

const BannaBotto = () => {
    return (
      
        <div
              
            className="hero min-h-screen mt-16 "
            style={{
                backgroundImage: `url(${btopimg})`,
                backgroundSize: 'cover',
                backgroundPosition: '',
            }}
        >
           <h3>Introducing Weedles
           </h3>
            <div className="hero-overlay bg-opacity-60 bg-black"></div>

            <div className="text-neutral-content w-10/12   mt-10"> 
                <h2 className="uppercase text-green-600 font-semibold py-3">Introducing Weedles</h2>
                
                <h1 className="text-5xl font-bold text-gray-100">Simple, high quality virtual reality</h1>
                
                <p className="py-6 text-gray-200">
                    Innovative headset to create the effect of presence immerses you in <br />
                    the real world with a volume of 360° viewing angle. Enjoy truly realistic and 
                    moving images due to <br /> the higher resolution and higher density pixel.
                </p>
             
            </div>
        </div>
    );
};

export default BannaBotto;
