import { MdOutlineDeleteForever } from 'react-icons/md';
const SelectedItem = ({ product, handleRemove }) => {
  
  return (
    <div>
      <div className="flex justify-between items-center text-lg font-semibold gap-1 py-2 border-b-2">
        <h2>{product.title}</h2>

        <div className='flex'>
        <p className="text-blue-600">{product.price}$ </p>
        <button onClick={()=>handleRemove(product)} className='text-2xl font-semibold text-red-600'><MdOutlineDeleteForever></MdOutlineDeleteForever></button>
        </div>
      </div>
    </div>
  );
};

export default SelectedItem;
