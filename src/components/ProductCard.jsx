import React from 'react';
import { productList } from '../utils/constant'; // ✅ Check if this path is correct
import Product from './Product';

const ProductCard = () => {
    console.log("Product List: ", productList); // ✅ Debugging Line

    if (!productList || productList.length === 0) {
        return <p className="text-center text-red-500">No products available.</p>;
    }

    return (
        <div className='product-card grid grid-cols-3 gap-4 p-4'>
            {
                productList.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    );
};

export default ProductCard;