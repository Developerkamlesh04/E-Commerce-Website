import React from 'react';

const Product = ({ product }) => {
    if (!product) return null; // अगर product undefined है, तो कुछ भी render न करें

    const { image, title, price, rating } = product;

    return (
        <div className='product p-4 border rounded-lg shadow-md'>
            <img className='w-full h-48 object-cover mb-4' src={image} alt={title} />
            <h1 className='text-lg font-bold'>{title}</h1>
            <p className='text-gray-500'>{rating?.rate} ratings</p>
            <p className='text-green-600 font-semibold'>Price: ${price}</p>
        </div>
    );
}

export default Product;
