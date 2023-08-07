import React from 'react';
import { UsersData } from '../Data/MovieData';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';

function UserdataTable() {
    const Head="text-xs text-left text-main font-semibold px-6 py-2 uppercase";
    const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";
  return (
    <div className='overflow-x-scroll overflow-hidden relative w-full'>
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead>
            <tr className="bg-dryGray">
                <th scope='col' className={`${Head}`}>image</th>
                <th scope='col' className={`${Head}`}>id</th>
                <th scope='col' className={`${Head}`}>Date</th>
                <th scope='col' className={`${Head}`}>fullName</th>
                <th scope='col' className={`${Head}`}>Email</th>
                {/* <th scope='col' className={`${Head}`}>Hour</th> */}
                <th scope='col' className={`${Head} text-end`}>Action</th>
            </tr>
        </thead>
        <tbody>
          {UsersData.map((movie,i)=>(
            <tr className='bg-main my-3' key={i}>
            <th className={`${Text}`}><img src={movie.image} alt={movie.name} className='h-10 rounded-md p-1 border-2 border-border mx-3 my-1' /></th>
            <th className={`${Text}`}><p >{movie.id}</p></th>
            <th className={`${Text}`}><p >{movie.date}</p></th>
            <th className={`${Text}`}><p >{movie.fullName}</p></th>
            <th className={`${Text}`}><p >{movie.Email}</p></th>
            {/* <th className={`${Text}`}><p >{movie.time}</p></th> */}
            <div className="flex flex-row items-center">
            {/* <button className='flex flex-row border-2 border-border text-border px-4 py-2 rounded-md my-4' >Download <FaCloudDownloadAlt className='text-green-500 my-1 mx-2'/></button> */}
            <Link to={`/movie/${movie.name}`} className='mx-5 my-5 bg-submain px-2 py-2 rounded-md'><AiFillDelete/></Link>
            </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserdataTable
