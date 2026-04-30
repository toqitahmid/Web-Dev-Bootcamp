// import React from 'react';

const ProductForm = ({handleAddProducts}) => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        const handleObj = {
            name,
            price,
            quantity
        }
        handleAddProducts(handleObj);
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="name" placeholder="Name"/>
                <br />
                <input type="text" name="price" placeholder="Price"/>
                <br />
                <input type="text" name="quantity" 
                placeholder="Quantity"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;