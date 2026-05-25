import Product from "../components/Product";

const productAPI = async() =>{
    try{
        const res = await fetch(`http://localhost:5000/products`,{cache: "no-store"});
        if(!res.ok){
            throw new Error('Failed to fetch products!');
        }
        return res.json();
    }
    catch(err){
        throw new Error('Failed to fetch products!');
    }
}

const ProductsPage = async() => {

    const products = await productAPI(); 
    console.log(products);
    return (
        <div className="w-10/12 mx-auto">
            <h1 className="text-3xl my-5">Total products: {products.length}</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
                {
                    products.map(product => (
                        <Product key={product.id} product={product}>
                        </Product>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductsPage;