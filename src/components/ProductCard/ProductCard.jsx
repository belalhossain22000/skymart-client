import  { useState } from 'react';
import './productCard.css';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';

const ProductCard = () => {
    const [isHovered, setIsHovered] = useState(false);
    

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <Link
            to={`/product-details`}
            onClick={() => scrollToTop()}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='relative block w-[17rem] m-3 transition-all cursor-pointer rounded-md'
        >
            <div className='productCard'>
                <div className='h-[20rem] relative'>
                    <img
                        className='h-full w-full object-cover object-left-top rounded-md'
                        src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
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
                        <p className='font-bold opacity-60'>Majestic Man</p>
                        <p>Men Printed Pure Cotton Straight shirt</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <p className='font-semibold'>499</p>
                        <p className='line-through opacity-60'>1499</p>
                        <p className='text-green-600 font-semibold'>66 % off</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
