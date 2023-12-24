/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../redux/api/usersApi';
import { setCredentials } from '../../redux/slice/authSlice';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = ({ setIsLoginFormVisible }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  // form state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  // form state seter
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // notify for error
  const notify = () => {
    toast.error('Invalid Email or Password!', {
      position: toast.POSITION.TOP_CENTER,

    });
  };
  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = formData
    try {
      const res = await login(data).unwrap();
      dispatch(setCredentials({ ...res }));

      navigate('/');

    } catch (err) {

      notify()
    }
  };


  return (
    <div className="container mx-auto flex justify-center items-center h-screen w-full ">
      <ToastContainer />
      <div className="w-full">
        <form onSubmit={handleSubmit} className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
          <div className='mb-5'>
            <h2 className="text-3xl font-bold mb-4 text-center text-[#2D324E]">Login to your account</h2>
            <p className='text-center'>Don’t have an account? <span className='text-blue-700 hover:underline cursor-pointer' onClick={() => setIsLoginFormVisible(false)}>Sign Up Free!</span></p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
