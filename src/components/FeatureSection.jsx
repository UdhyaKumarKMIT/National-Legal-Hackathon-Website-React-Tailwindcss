import { features } from "../constants";
import EventDetails from "./EventsDetails";

const FeatureSection = () => {
  return (
    <div id="Theme" className="relative mt-20 border-b border-neutral-800 ">
      <div className="text-center">

        <EventDetails/>
        
        <h2 className="text-3xl sm:text-5xl lg:text-5xl mt-10 lg:mt-20 tracking-wide">
          Choose your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Theme
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-2xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-1xl text-neutral-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
