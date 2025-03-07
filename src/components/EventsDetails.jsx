import { CalendarDays, MapPin, CreditCard, Clock, Trophy } from "lucide-react";

const EventDetails = () => {
  return (
    <div id="EventDetails" className="text-white  p-6 rounded-xl shadow-lg max-w-xl min-h-150 mx-auto mt-5">
      <h2 className="text-3xl sm:text-5xl lg:text-5xl mt-10 lg:mt-20 tracking-wide text-center mb-10 ">📅 Event Details</h2>
      <div className="space-y-4 text-[1.4rem]">
        <div className="flex items-center gap-3">
          <CalendarDays className="text-orange-500" />
          <span><strong>Date:</strong> 04 APRIL 2025</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="text-orange-500" />
          <span><strong>Venue:</strong> MIT Campus, Anna University</span>
        </div>
        <div className="flex items-center gap-3 text-red-400">
          <CreditCard />
          <span><strong>Registration Fee:</strong> ₹250/- per participant</span>
        </div>
        <div className="flex items-center gap-3 text-red-400">
          <Clock />
          <span><strong>Deadline:</strong> 31 MARCH 2025</span>
        </div>
        <div className="flex items-center gap-3 text-yellow-400">
          <Trophy />
          <span><strong>Prizes:</strong> 🏆 First Prize - ₹10,000, 🎖 Second Prize - ₹5,000</span>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
