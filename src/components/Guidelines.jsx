const Guidelines = () => {
    return (
      <div id="Guidelines" className="flex flex-col items-center mt-6 lg:mt-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide">
          Guidelines
        </h2>
        <div className="mt-10 text-lg text-neutral-500 max-w-4xl  text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">Team Formation:</h3>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>A team can have a maximum of 4 members, consisting of:</li>
            <li>2 Technology students and 2 Law students</li>
            <li>3 Technology students and 1 Law student</li>
          </ul>
          
          <h3 className="text-2xl font-semibold mt-6 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">Team Selection:</h3>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Teams must submit an abstract on the chosen theme via a weblink.</li>
            <li>Experts from Technology and Law will select 10 teams for the Finale.</li>
            <li>The Finale will be held in person for 12 hours (8 AM to 8 PM).</li>
            <li>Teams will create an AI-based app to solve a problem statement.</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Guidelines;
  