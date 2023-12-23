import  { useState } from 'react';

const ProductSidebar = () => {
    const [selectedFilters, setSelectedFilters] = useState({
        price: '',
        color: '',
        size: '',
        discount: '',
    });

    const handleFilterChange = (filterType, value) => {
        setSelectedFilters({ ...selectedFilters, [filterType]: value });
        // applyFilters({ ...selectedFilters, [filterType]: value });
        console.log(selectedFilters)
    };

    return ( 
        <div className="bg-gray-100 rounded-lg p-6 h-[100vh]">
            <h2 className="text-lg font-bold mb-4">Filters</h2>
<div className='h-[1px] w-full bg-green-700 mb-2'></div>
            <div className="mb-4">
                <h3 className="font-semibold mb-2">Price</h3>
                <select
                    value={selectedFilters.price}
                    onChange={(e) => handleFilterChange('price', e.target.value)}
                    className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 py-2 px-3 outline-none"
                >
                    <option value="">All</option>
                    <option value="0-50">$0 - $50</option>
                    <option value="51-100">$51 - $100</option>
                  
                </select>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">Color</h3>
                <select
                    value={selectedFilters.color}
                    onChange={(e) => handleFilterChange('color', e.target.value)}
                    className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 py-2 px-3 outline-none"
                >
                    <option value="">All</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                  
                </select>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">Size</h3>
                <select
                    value={selectedFilters.size}
                    onChange={(e) => handleFilterChange('size', e.target.value)}
                    className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 py-2 px-3 outline-none"
                >
                    <option value="">All</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                   
                </select>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">Discount</h3>
                <select
                    value={selectedFilters.discount}
                    onChange={(e) => handleFilterChange('discount', e.target.value)}
                    className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 py-2 px-3 outline-none"
                >
                    <option value="">All</option>
                    <option value="10">10% off</option>
                    <option value="20">20% off</option>
                    
                </select>
            </div>
        </div>
    );
};

export default ProductSidebar;
