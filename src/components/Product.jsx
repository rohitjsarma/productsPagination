import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../App.css';

const Product = () => {
  const [products, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ProductsperPage = 5;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  const indexOfLast = currentPage * ProductsperPage;
  const indexOfFirst = indexOfLast - ProductsperPage;
  const currentProduct = products.slice(indexOfFirst, indexOfLast);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(products.length / ProductsperPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="product-page">
    <div className="header">
      <h1>Explore Our Top Picks</h1>
      <p>Browse a curated selection of premium products, hand-picked just for you.</p>
    </div>
    <div className="cards">
      {currentProduct.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div><br/>
    <div className="pages">
      <span>Page {currentPage}</span>&nbsp;
      <button onClick={handlePrevious} disabled={currentPage === 1}>&nbsp;
        Previous
      </button> &nbsp;
      <button
        onClick={handleNext}
        disabled={currentPage === Math.ceil(products.length / ProductsperPage)}
      >
        Next
      </button>
    </div>
  </div>
  
  );
};

export default Product;
