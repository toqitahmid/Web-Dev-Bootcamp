// import React from 'react';
import { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManager = () => {

    const [products, setProducts] = useState([]);
    const handleAddProducts = newProduct => {
        setProducts([...products, newProduct]);
    }
    return (
        <div>
            <ProductForm 
            handleAddProducts = {handleAddProducts}>
            </ProductForm>
            <ProductTable
            products = {products}
            ></ProductTable>
        </div>
    );
};

export default ProductManager;