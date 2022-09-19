import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Cartrow from './Cartrow';

const Cart = () => {
    const { cart, isLoading, error } = useSelector(state => state.cart);

    let total = 0;

    cart.map(product => {
        total = total + parseFloat(product.price)
    })

    return (
        <div>
            <div className='flex justify-between items-center mb-3'>
                <Link to="/dashboard" className='btn btn-primary mr-5'>Dashboard</Link>
                <h1 className='text-center text-3xl'>Cart Page</h1>
            </div>
            <div className="flex">
                <div className="overflow-x-auto flex-initial w-3/4">
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
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart && cart.map(product => <Cartrow
                                    product={product}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
                <div className='flex-initial w-1/4 p-5 bg-slate-200 mx-3 rounded-md'>
                    <h2 className='text-3xl'>Cart Total</h2>
                    <div className='flex justify-between my-4' >
                        <h5 className='text-2xl'>Subtotal: </h5>
                        <h5 className='text-2xl'>50</h5>
                    </div>
                    <div className="divider"></div>
                    <div className='flex justify-between my-4' >
                        <h5 className='text-2xl'>Total: $ {total.toFixed(2)} </h5>
                        <h5 className='text-2xl'>$ 50</h5>
                    </div>
                    <button className='btn btn-primary w-full'>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;