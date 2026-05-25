import React from 'react';

const Product = ({product}) => {

    const {name, price,  description} = product;
    return (
      <div>
        <div className="card w-96 bg-base-100 card-lg shadow-sm">
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>
              {description}
            </p>
            <div className="justify-end card-actions">
              <button className="btn btn-primary">{price} $</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Product;