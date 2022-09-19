import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductRow from './ProductRow';
import {useSelector, useDispatch} from 'react-redux';
import { fetchProducts } from '../../Fetures/productsSlice';
import { add } from '../../Fetures/cartSlice';

const Products = () => {
    // const [products, setProducts] = useState([]);
    const [sizefilter, setSizeFilter] = useState([]);
    const [pdnameFilter, setPdNamefilter] = useState([]);
    const [search, setSearch] = useState([]);
    const [isChecked, setIschecked] = useState([]);
    const [cart, setCart] = useState([]);

    const {products, isLoading, error} = useSelector(state => state.products);
    const st = useSelector(state => state);
    
    const dispatch = useDispatch();

    console.log(st)

    useEffect(()=> {
        dispatch(fetchProducts())
    }, [])

    if(isLoading){
        return <h1 className='text-center pt-20'>Loading...</h1>
    }

   /*  useEffect(() => {
        axios.get('products.json')
            .then(res => setProducts(res.data))
    }, [])
 */
    

    const addCart = (product) => {
        const cartItems = [...cart, product];
        setCart(cartItems);
        dispatch(add(product))       
    }


    // handleCart
    const handleAddCart = async () => {
        console.log(isChecked)
    }

    const handleCheckBox = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setIschecked([...isChecked, value])
        }
        else {
            setIschecked(isChecked.filter((e) => e !== value))
        }
    }

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

    if (sizefilter.length > 0) {
        loadProducts = sizefilter
    }
    else if (pdnameFilter.length > 0) {
        loadProducts = pdnameFilter
    }
    else if (search.length > 0) {
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
                    <button className='btn btn-ghost ml-2 text-blue-500' onClick={() => {
                        setSizeFilter(0)
                        setPdNamefilter(0)
                    }}>Reset</button>
                </div>

                <div className='flex mb-2'>
                    <button ></button>
                    <Link cart={cart} to="/cart" className='btn btn-secondary mr-2'>Cart ({cart?.length})</Link>
                    <div className="form-control mr-2">
                        <div className="input-group">
                            <input onChange={searchResult} type="text" placeholder="Search…" className="input input-bordered" />
                        </div>
                    </div>
                    <button className='btn btn-primary' onClick={handleAddCart}>Add To Cart</button>

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
                            loadProducts && loadProducts.map(product => <ProductRow
                                product={product}
                                isChecked={isChecked}
                                setIschecked={setIschecked}
                                handleCheckBox={handleCheckBox}
                                addCart={addCart}
                                key={product?._id} />)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Products;