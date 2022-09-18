import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductRow from './ProductRow';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [sizefilter, setSizeFilter] = useState([]);
    const [pdnameFilter, setPdNamefilter] = useState([]);    
    const [search, setSearch] = useState([]);    

    useEffect(()=> {
        axios.get('products.json')
        .then(res => setProducts(res.data))
    },[])

    // Filter by size
    const sizeFilter = (e) => {        
        const size = e.target.value;
        const pdSize = products.filter(product => product.size === size)
        setSizeFilter(pdSize)
        setPdNamefilter(0)
    }
    // Filter By Product Name
    const filterByName = (e) => {        
        const pdType = e.target.value;
        const result = products.filter(product => product.pdtype === pdType)
        setPdNamefilter(result)
        setSizeFilter(0)
    }

    // Filter by search
    const searchResult = (e) => {
        const searchText = e.target.value;
        const result = products.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearch(result);        
    }

    let loadProducts;

    if(sizefilter.length > 0){
        loadProducts = sizefilter
    }
    else if (pdnameFilter.length > 0){
        loadProducts = pdnameFilter
    }
    else if (search.length > 0){
        loadProducts = search
    }
    else {
        loadProducts = products
    }

    return (
        <div>
            <div className="flex justify-between">
                <div>
                    <select className="select mr-2 select-bordered max-w-xs" onChange={filterByName}>
                        <option selected value="hoodies">Hoodies</option>
                        <option value="t-shirt">T-shirt</option>
                        <option value="pant">Pant</option>
                    </select>
                    <select className="select select-bordered max-w-xs" onChange={sizeFilter}>
                        <option selected value="m">M</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                    </select>
                    <button className='btn btn-ghost ml-2 text-blue-500' onClick={()=> {
                        setSizeFilter(0)
                        setPdNamefilter(0)
                    }}>Reset</button>
                </div>
                <div className='flex mb-2'>
                    <div className="form-control mr-2">
                        <div className="input-group">
                            <input onChange={searchResult} type="text" placeholder="Search…" className="input input-bordered" />                           
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