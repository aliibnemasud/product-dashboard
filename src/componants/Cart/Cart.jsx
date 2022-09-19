import React from 'react';

const Cart = () => {

    return (
        <div >
            <h1 className='text-center text-3xl my-4'>Cart Page</h1>
            <div className="grid">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div >
                    <h2 className='text-3xl'>Cart Total</h2>
                    <div className='flex justify-between my-4' >
                        <h5 className='text-2xl'>Subtotal: </h5>
                        <h5 className='text-2xl'>$ 50</h5>
                    </div>
                    <button className='btn btn-primary'>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;