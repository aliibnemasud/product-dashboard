import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

const Cartrow = ({ product}) => {

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        if (quantity < 10) {
            setQuantity(prevcount => prevcount + 1);
        }
    }
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevcount => prevcount - 1);
        }
    }

    return (
        
            <tr>
                <th>{product?.image}</th>
                <td>{product?.name}</td>
                <td>{product?.color}</td>
                <td>{product?.size}</td>
                <td>{product?.stock ? "In Stock" : "Out Of Stock"}</td>
                <td>{product?.price}</td>
                <td>
                    <div className="form-control">
                        <div className="input-group">
                            <button className="btn btn-square btn-sm" onClick={handleDecrement}>
                                <MinusIcon className='h-6 w-6'></MinusIcon>
                            </button>
                            <h3 className=' mx-5 text-xl'>{quantity}</h3>
                            <button className="btn btn-square btn-sm" onClick={handleIncrement}>
                                <PlusIcon className=' h-6 w-6'></PlusIcon>
                            </button>
                        </div>
                    </div>
                </td>
                
                <td>{(quantity * parseFloat(product?.price)).toFixed(2) }</td>
            </tr>
      
    );
};

export default Cartrow;