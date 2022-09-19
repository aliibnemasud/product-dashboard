import { ShoppingBagIcon } from '@heroicons/react/24/solid';

const ProductRow = ({ product, handleCheckBox, addCart }) => {

    const { name, image, size, color, stock, price, _id } = product;
      

    return (        
            <tr>
                <th>{image}</th>
                <td>{name}</td>
                <td>{color}</td>
                <td>{size}</td>
                <td>{product?.stock ? "Out Of Stock" : "In Stock"}</td>
                <td>{price}</td>
                <td className='flex items-center'>
                    <input type="number" defaultValue={1} placeholder="Quantity" className="input input-bordered w-20" />
                    <button title='Add To Cart' disabled={stock} onClick={()=> addCart (product)} className='btn btn-accent mx-2'><ShoppingBagIcon className="h-6 w-6  text-white" /></button>
                    <input type="checkbox" className="checkbox" value={_id} checked={product.isChecked} onChange={(e) => handleCheckBox(e)} />
                </td>
            </tr>
        
    );
};

export default ProductRow;