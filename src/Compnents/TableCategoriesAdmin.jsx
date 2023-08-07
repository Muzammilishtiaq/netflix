import React from 'react';
import {CategoriesData}  from '../Data/CategoriesData'
import { FaEdit } from 'react-icons/fa';
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom';

function TableCategoriesAdmin() {
  const Head="text-xs text-left text-main font-semibold px-6 py-2 uppercase";
    const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";
  return (
    <div>
          <div className='overflow-x-scroll overflow-hidden relative w-full'>
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead>
            <tr className="bg-dryGray">
                <th scope='col' className={`${Head}`}>ID</th>
                <th scope='col' className={`${Head}`}>Date</th>
                <th scope='col' className={`${Head}`}>Title</th>
                <th scope='col' className={`${Head} text-end`}>Action</th>
            </tr>
        </thead>
        <tbody>
          {CategoriesData.map((movie,index)=>(
            <tr className='bg-main my-3' key={index}>
            <th className={`${Text}`}>{movie._id}</th>
            <th className={`${Text}`}><p >{movie.date}</p></th>
            <th className={`${Text}`}><p >{movie.title}</p></th>
            <div className="flex flex-row items-center justify-end">
            <button className='flex flex-row border-2 border-border text-border px-4 py-2 rounded-md my-4' >Edit <FaEdit className='text-green-500 my-1 mx-2'/></button>
            <Link  className='mx-5 my-5 bg-submain px-2 py-2 rounded-md'><AiFillDelete/></Link>
            </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default TableCategoriesAdmin;
