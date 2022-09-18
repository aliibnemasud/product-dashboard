import React from 'react';

const Products = () => {
    return (
        <div>
            <div className="searchbar flex justify-between">
                <div>
                    <select className="select mr-2 select-bordered max-w-xs">
                        <option selected >Hoodies</option>
                        <option>T-shirt</option>
                        <option>Pant</option>
                    </select>
                    <select className="select select-bordered max-w-xs">
                        <option selected>M</option>
                        <option>XL</option>
                        <option>XXL</option>
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
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
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

        </div>
    );
};

export default Products;