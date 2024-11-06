import aboutB from '../assets/bgs_e67d0e15-ca26-4437-9778-3ccf1e634253_1920x.webp'
const AboutBannar = () => {

    return (
        <div>
            <div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${aboutB})`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="">
      <h1 className="mb-5 text-5xl font-semibold">Quality products Quality Services</h1>
      <p className="mb-5">
      
      A better platform to shop online , it is very nice platform for online shop in this world
      </p>
     
    </div>
  </div>
</div>
            
        </div>
    );
};

export default AboutBannar;