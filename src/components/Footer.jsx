import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 text-neutral-300">
      <div className="max-w-7xl text-[1.2rem] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
       
        <div>
          <h3 className="font-bold mb-4 text-2xl ">Developer Details</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-medium text-white">Udhya Kumar K</span>
              <div className="flex flex-col text-[1rem] items-start gap-2 mt-2 text-neutral-400">
                <a
                  href="https://github.com/UdhyaKumarKMIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <FaGithub className="text-xl" /> UdhyaKumarKMIT
                </a>
                <a
                  href="https://www.linkedin.com/in/udhya-kumar-k-b7999128a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <FaLinkedin className="text-xl" /> Udhyakumar
                </a>
                <a href="mailto:udhyak9445@gmail.com" className="flex items-center gap-2 hover:text-white">
                  <FaEnvelope className="text-xl" /> udhyak9445@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Developer 2 */}
        <div>
          
          <ul className="space-y-2">
            <li>
              <span className="font-medium text-white">Developer Name 2</span>
              <div className="flex flex-col items-start gap-2 mt-2">
                <a
                  href="https://github.com/developer2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <FaGithub className="text-xl" /> Developer2
                </a>
                <a
                  href="https://linkedin.com/in/developer2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <FaLinkedin className="text-xl" /> Developer2
                </a>
                <a href="mailto:developer2@example.com" className="flex items-center gap-2 hover:text-white">
                  <FaEnvelope className="text-xl" /> developer2@example.com
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} National Legal Hackathon Website All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
