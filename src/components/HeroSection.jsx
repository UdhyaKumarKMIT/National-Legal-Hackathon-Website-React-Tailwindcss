import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div  id="Home" className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        National Legal Hackathon 2025
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
            An Innovation Hackathon in Legal
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-200 max-w-4xl">
       This Legal Hackathon aims to foster innovation and collaboration within the society by leveraging AI technology to address the pressing Social Issues. Empower your creativity and bring your ideas to life in our
        AI X Law Hackathon
      </p>
      <div className="flex justify-center my-10">
      <a
  href="#"
  className="bg-gradient-to-r from-orange-500 to-orange-800 w-72 h-16 text-xl font-semibold text-white flex items-center justify-center rounded-md transition-transform transform hover:scale-105 hover:shadow-lg hover:from-orange-600 hover:to-orange-900 shadow-orange-400"
>
  Register
</a>

        
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
