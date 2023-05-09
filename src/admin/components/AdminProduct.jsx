import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
const AdminProduct = ({product, i, deleteProduct}) => {
    const {_id, name, category,seller, price, stock, ratings, ratingsCount, shipping} = product
    return (
        <>                  
            <tr className="border border-x-0 p-2">
                <td className="p-2 mx-2">{i + 1}</td>
                <td className="p-2 mx-2">{name.length > 15 ? `${name.slice(0,15)}...`  : name}</td>
                <td className="p-2 mx-2">{category}</td>
                <td className="p-2 mx-2">{seller}</td>
                <td className="p-2 mx-2">{price}</td>
                <td className="p-2 mx-2">{stock}</td>
                <td className="p-2 mx-2">{ratings}</td>
                <td className="p-2 mx-2">{ratingsCount}</td>
                <td className="p-2 mx-2">{shipping}</td>
                <td className="p-2 mx-2 "><Link to={`/pvt-contro-panel/product/${_id}/edit`}><FiEdit className="text-xl cursor-pointer inline ml-2"/></Link><MdDeleteOutline onClick={() => deleteProduct(_id)} className="text-xl cursor-pointer inline ml-2"/></td>
            </tr>
        </>
 
    );
};

export default AdminProduct;