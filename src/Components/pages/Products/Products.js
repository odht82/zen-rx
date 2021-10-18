import React, { useEffect, useState } from 'react';
import './Products.css';
import ProductCard from './ProductCard/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('./productData.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])
  console.log(products)
  return (
    <div className="product">
      <div className="product-container">
        <h2 className='product-section-heading'>
          Products
        </h2>
        <div className="product-list-section">
          {products.map(product => <ProductCard
            key={product.key}
            product={product}
          ></ProductCard>)}
        </div>
      </div>
    </div >
  );
}

export default Products;
