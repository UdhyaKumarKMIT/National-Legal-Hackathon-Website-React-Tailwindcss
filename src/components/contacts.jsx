const Contacts = () => {
  return (
    <div className="mt-20" id="contacts">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Contacts
      </h2>
      <div className="flex flex-wrap justify-center space-x-8">
        {/* Contact 1 */}
        <div className="p-6 border border-neutral-700 rounded-xl bg-neutral-800 text-white text-center w-72 shadow-md">
          <h3 className="text-2xl font-semibold">Chithra Smoorthy</h3>
          <p className="text-lg text-orange-400">Event Coordinator</p>
          <p className="mt-2">
            📞 <a href="tel:+919884776511" className="hover:text-orange-400">+91 98847 76511</a>
          </p>
          <p className="mt-1">
            📧 <a href="mailto:chithrasmoorthy@gmail.com" className="hover:text-orange-400">
              chithrasmoorthy@gmail.com
            </a>
          </p>
        </div>

        {/* Contact 2 */}
        <div className="p-6 border border-neutral-700 rounded-xl bg-neutral-800 text-white text-center w-72 shadow-md">
          <h3 className="text-2xl font-semibold">T. Sudhakar</h3>
          <p className="text-lg text-orange-400">Technical Lead</p>
          <p className="mt-2">
            📞 <a href="tel:+919942290298" className="hover:text-orange-400">+91 99422 90298</a>
          </p>
          <p className="mt-1">
            📧 <a href="mailto:tsudhakar105@gmail.com" className="hover:text-orange-400">
              tsudhakar105@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
