// import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div style={{'marginTop' : '20px'}}>
            <h2>Products: {products.length}</h2>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.index}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductTable;