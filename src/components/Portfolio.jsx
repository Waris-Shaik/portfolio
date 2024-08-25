import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <div className="text-center">
        <div className="relative w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] border-4 border-gray-800 shadow-2xl rounded-xl overflow-hidden mb-6">
          <img
            src="https://res.cloudinary.com/dupxvcm3h/image/upload/v1724597069/mlvrrugtdiwjtfkoxzu3.jpg"
            alt="Waris Shaik"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Waris Shaik</h1>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="https://github.com/Waris-Shaik/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} className="hover:text-gray-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/waris-shaik-0b0b7b205/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} className="hover:text-gray-400 transition-colors" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} className="hover:text-gray-400 transition-colors" />
          </a>
          <a href="https://www.instagram.com/waris.xcd/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} className="hover:text-gray-400 transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
