import { ShoppingBagIcon } from '@heroicons/react/24/solid';

const ProductRow = ({ product, handleCheckBox, addCart }) => {
    const { name, picture, size, color, stock, price, _id } = product;
    return (        
            <tr>
                <th>
                    <img src={picture} width="60px" height="60px"  alt="" />
                </th>
                <td>{name}</td>
                <td>{color}</td>
                <td>{size}</td>
                <td>{product?.stock ? "In Stock" : "Out Of Stock"}</td>
                <td>{price}</td>
                <td className='flex items-center'>
                    <input type="number" defaultValue={1} placeholder="Quantity" className="input input-bordered w-20" />
                    <button title='Add To Cart' disabled={!stock} onClick={()=> addCart (product)} className='btn btn-accent mx-2'><ShoppingBagIcon className="h-6 w-6  text-white" /></button>
                    <input type="checkbox" className="checkbox" value={_id} checked={product.isChecked} onChange={(e) => handleCheckBox(e)} />
                </td>
            </tr>
        
    );
};

export default ProductRow;