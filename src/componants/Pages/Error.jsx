import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center my-20'>
            <h1 className='text-5xl'>No Page Found Go go Home</h1>
            <Link to="/" className='btn btn-link'>Home</Link>
        </div>
    );
};

export default Error;