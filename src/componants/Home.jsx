import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className='text-center'>
                <Link to="dashboard" className='btn btn-primary'>Dashboard</Link>
            </div>
        );
    }
}

export default Home;