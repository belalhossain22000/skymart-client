import { useState } from 'react';
import Login from '../../pages/Login/Login';
import Registration from '../../pages/Registration/Registration';
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Auth = () => {
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

    const imageUrl = '/bg.jpg';

    return (
        <div className="flex items-center justify-center h-screen bg-cover bg-center  " style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="container mx-auto w-full md:w-[60%] h-[90vh] flex md:flex-row flex-col shadow-xl rounded-lg ">
                <div className="md:w-1/2  bg-green-600 flex flex-col justify-center items-left gap-5 px-5 z-20 py-8">
                    <h1 className="text-white text-3xl font-bold mb-4 text-center"><Link to="/"> App Logo</Link></h1>

                    <p className="text-white mb-4 font-semibold text-center">Login using social media to get quick access</p>


                    <div className='flex md:flex-col flex-row justify-center gap-5'>
                        <button className="bg-blue-800 text-white py-2 md:px-4 px-8 rounded mr-2 flex items-center gap-3"><FaFacebookF size={20} /><span className='hidden md:block'>Login with Facebook</span></button>
                        <button className="bg-red-800 text-white py-2 md:px-4 px-8 rounded mr-2 flex items-center gap-3"><FaGoogle /><span className='hidden md:block'>Login with Google</span></button>
                        <button className="bg-blue-500 text-white py-2 md:px-4 px-8 rounded flex items-center gap-3"><FaTwitter /><span className='hidden md:block'>Login with Twitter</span></button>
                    </div>
                </div>
                <div className="w-[100%] bg-white ">
                    <div className='transition-transform duration-500 ease-in-out transform' >
                        {isLoginFormVisible ? (
                            <div className='transition-transform duration-500 ease-in-out transform' style={{ transform: isLoginFormVisible ? 'translateX(0)' : 'translateX(-100%)' }}>

                                <Login setIsLoginFormVisible={setIsLoginFormVisible} />
                            </div>
                        ) : (
                            <div className='transition-transform duration-500 ease-in-out transform' style={{ transform: !isLoginFormVisible ? 'translateX(0)' : 'translateX(-100%)' }}>

                                <Registration setIsLoginFormVisible={setIsLoginFormVisible} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
