import { useState } from 'react';
import './productCard.css';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCartPlus } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { title,image,price,brand,_id} = product || {}

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
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
                            <button className='bg-white text-green-600 px-4 py-2 rounded-md'>
                                <FaCartPlus size={30} />
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
                       
                       <Link to={`/product-details/${_id}`}><FaArrowRight size={20} color='green'/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
