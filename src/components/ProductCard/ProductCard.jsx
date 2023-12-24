import { useState } from 'react';
import './productCard.css';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCartPlus } from 'react-icons/fa';
import { useAddToCartMutation } from '../../redux/api/cartApi';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { userInfo } = useSelector((state) => state.auth);
    const { title, image, price, brand, _id } = product || {}
    const [addToCart, { isLoading }] = useAddToCartMutation()
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    const cart = {
        userId: userInfo?.data?._id,
        cart: [
            {
                productId: _id,
                quantity: 1
            }
        ]
    }

    // notify for error
    const notify = () => {
        toast.error('Please login first!', {
            position: toast.POSITION.TOP_CENTER,

        });
    };

    const handleAddToCart = async () => {
        if (userInfo) {
            await addToCart(cart)
        }
        else {
            notify()
        }
    }



    return (
        <div

            onClick={() => scrollToTop()}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='relative block w-[17rem] m-3 transition-all cursor-pointer rounded-md'
        >
            <div className='productCard'>
                <div className='h-[20rem] relative'>
                    <img
                        className='h-full w-full object-cover object-left-top rounded-md'
                        src={image}
                        alt=""
                    />
                    {isHovered && (
                        <div className='overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                            <button onClick={handleAddToCart} className='bg-white text-green-600 px-4 py-2 rounded-md'>
                                {isLoading ? "Loading..." : <FaCartPlus size={30} />}
                            </button>
                        </div>
                    )}
                </div>
                <div className='textPart bg-white p-3'>
                    <div>
                        <p className='font-bold opacity-60 text-xl'>{brand}</p>
                        <p className='font-semibold text-lg'>{title}</p>
                    </div>
                    <div className='flex items-center justify-between space-x-2'>
                        <p className='font-semibold text-lg'> Price : <span className='text-green-600'>{price}</span></p>,

                        <Link to={`/product-details/${_id}`}><FaArrowRight size={20} color='green' /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
