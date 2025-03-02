import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ addToCart }) {
  const products = [
    { id: 1, name: 'Laptop', image: 'https://via.placeholder.com/150', price: '999.99' },
    { id: 2, name: 'Phone', image: 'https://via.placeholder.com/150', price: '699.99' },
    { id: 3, name: 'Headphones', image: 'https://via.placeholder.com/150', price: '99.99' },
    { id: 4, name: 'Keyboard', image: 'https://via.placeholder.com/150', price: '49.99' },
    { id: 5, name: 'Smart Watch', image: 'https://via.placeholder.com/150', price: '199.99' },
    { id: 6, name: 'TV', image: 'https://via.placeholder.com/150', price: '499.99' },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
