import React, { useContext } from 'react';
import JobsContext from '../../Context/JobsContext';
import { MdDeleteForever } from "react-icons/md";

function DeleteButton({ id_oferta }) {
  const { deleteJob } = useContext(JobsContext);

  const handleDelete = () => {
    console.log('Deleting job with id_oferta:', id_oferta);
    deleteJob(id_oferta);
  };

  return (
    <button 
      className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
      onClick={handleDelete}
    >
      <MdDeleteForever />
    </button>
  );
}

export default DeleteButton;
