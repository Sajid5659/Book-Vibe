import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({book}) => {
    const {bookId,bookName,image,rating,category,tags,yearOfPublishing,publisher}=book;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100  shadow-sm border h-[520px]">
  <div className='p-5'>
    <figure className='p-8 bg-gray-200  w-5/6 rounded-2xl mx-auto'>
    <img
    className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  </div>
  <div className="card-body">
    <div className='flex justify-center gap-6 mb-4'>
        {
        tags.map(tag=><button className='text-green-400 font-bold text-lg'>{tag}</button>)
        }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary mx-auto">{yearOfPublishing}</div>
    </h2>
    <p>Written by : {publisher}</p>
    <p className='border-t-1 border-dashed'></p>
    <div className="card-actions justify-between mt-4">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}<FaStar /></div>
    </div>
  </div>
</div>
        </Link>
    );
};

export default Book;