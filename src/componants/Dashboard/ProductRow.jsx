import React from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

const ProductRow = () => {
    return (
        <tr>
            <th>Image</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>$35</td>
            <td className='flex items-center'>
                <input type="number" placeholder="Quantity" className="input input-bordered w-20" />
                <button title='Add To Bag' className='btn btn-accent mx-2'><ShoppingBagIcon className="h-6 w-6  text-white" /></button>
                <input type="checkbox" checked="checked" className="checkbox" />
            </td>
        </tr>
    );
};

export default ProductRow;