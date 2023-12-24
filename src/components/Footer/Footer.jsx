import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-8 mt-10 rounded-md text-white">
      <div className=" mx-auto px-4 container ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-semibold">App Logo</h2>
            <p className="text-sm text-white">A brief description of the company goes here.</p>
          </div>
          <div className="flex justify-center md:justify-end">
            <ul className="flex flex-wrap gap-4">
              <li><Link to="#home" className="text-white hover:text-gray-500">Home</Link></li>
              <li><Link to="#about" className="text-white hover:text-gray-500">About</Link></li>
              <li><Link to="#products" className="text-white hover:text-gray-500">Products</Link></li>
              <li><Link to="#contact" className="text-white hover:text-gray-500">Contact</Link></li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="text-center text-white">
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
          <p>Designed and developed by Your Name</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
