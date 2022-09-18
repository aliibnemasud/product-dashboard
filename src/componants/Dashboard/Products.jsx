import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductRow from './ProductRow';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [sizefilter, setSizeFilter] = useState([]);
    const [pdnameFilter, setPdNamefilter] = useState([]);    

    useEffect(()=> {
        axios.get('products.json')
        .then(res => setProducts(res.data))
    },[])

    const sizeFilter = (e) => {
        console.log(e.target.value)
        const size = e.target.value;
        const pdSize = products.filter(prodcut => prodcut.size === size)
        setSizeFilter(pdSize)
    }



    let loadProducts;

    if(sizefilter.length > 0){
        loadProducts = sizefilter
    }
    else if (pdnameFilter.length > 0){
        loadProducts = pdnameFilter
    }
    else {
        loadProducts = products
    }






    return (
        <div>
            <div className="searchbar flex justify-between">
                <div>
                    <select className="select mr-2 select-bordered max-w-xs">
                        <option selected >Hoodies</option>
                        <option>T-shirt</option>
                        <option>Pant</option>
                    </select>
                    <select className="select select-bordered max-w-xs" onChange={sizeFilter}>
                        <option selected value="m">M</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                    </select>
                </div>
                <div className='flex mb-2'>
                    <div className="form-control mr-2">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-bordered" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    <button className='btn btn-primary'>Add To Cart</button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Size</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Buy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loadProducts && loadProducts.map(product => <ProductRow product={product}/>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Products;