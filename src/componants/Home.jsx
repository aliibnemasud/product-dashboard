import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className='text-center my-20'>
                <h1 className=' my-4 text-3xl'>Product Dashboard</h1>
                <Link to="dashboard" className='btn btn-primary'>Dashboard</Link>
            </div>
        );
    }
}

export default Home;