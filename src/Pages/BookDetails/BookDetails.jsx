import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book=>book.bookId===bookId);
    console.log(singleBook)
    const {bookName,author,category,image,publisher,rating,review,tags,yearOfPublishing,totalPages}=singleBook
    return (
        <div className="grid lg:grid-cols-2 bg-base-100 shadow-sm p-8 my-10 gap-6">
  <figure className='bg-gray-200 m-auto'>
    <img
      src={image}
      alt="Movie"
      className='p-8' />
  </figure>
  <div className="flex flex-col flex-1">
    <h2 className="card-title text-4xl mb-5">{bookName}</h2>
    <p className='text-xl mb-8'>By : {author}</p>
    <p className='border-y-1 border-solid border-gray-300 text-xl mb-6'>{publisher}</p>
    <p className='text-sm mb-6'>{review}</p>
    <div className='flex border-b-1 border-solid border-gray-300 gap-6 mb-4'>
        <h1 className='font-bold'>Tag :</h1>
        {
        tags.map(tag=>(
            <div>
                <button className='text-green-400 font-bold text-lg'>#{tag}</button>
            </div>
        ))
        }
    </div>
    <p className='text-gray-400 my-2'>Number of pages : {totalPages}</p>
    <p className='text-gray-400 my-2'>Publisher : {publisher}</p>
    <p className='text-gray-400 my-2'>Year : {yearOfPublishing}</p>
    <p className='text-gray-400 my-2'>Rating : {rating}</p>
    <div className='flex gap-6 my-4'>
        <button className="btn bg-white text-black border border-black">Read</button>
    <button className="btn btn-accent text-white">Wishlist</button>
    </div>
  </div>
</div>
    );
};

export default BookDetails;