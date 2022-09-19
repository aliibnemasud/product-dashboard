import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Products from './Products';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-10">
                    {/* <!-- Page content here --> */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Dashboard</label>
                   <Outlet/>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content bg-slate-800">
                        {/* <!-- Sidebar content here --> */}
                        <h1 className='text-3xl text-white my-5'>TootSi Dashboard</h1>                        
                        <li className='bg-slate-500 mb-2 rounded-md'><Link to="/dashboard" className='text-white'>Products</Link></li>
                        <li className='bg-slate-500 mb-2 rounded-md'><Link to="cart" className='text-white'> Cart </Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;