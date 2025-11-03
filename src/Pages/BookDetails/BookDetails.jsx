import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDb, addToWishedDb } from '../../Utility/addtodb';
import { ToastContainer, toast } from 'react-toastify';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book=>book.bookId===bookId);
    console.log(singleBook)
    const {bookName,author,category,image,publisher,rating,review,tags,yearOfPublishing,totalPages}=singleBook;

    const handleMarkAsRead = (id) =>{
    //    toast("Wow so easy !");
        addToStoredDb(id);
    }
    const handleWishList = (id) =>{

        addToWishedDb(id);
    }
    
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
                <button className='text-green-400 text-sm font-semibold'>#{tag}</button>
            </div>
        ))
        }
    </div>
    <p className='text-gray-400 my-2'>Number of pages : <span className='font-semibold  text-black'> {totalPages}</span></p>
    <p className='text-gray-400 my-2'>Publisher : <span className='font-semibold text-black'>{publisher}</span></p>
    <p className='text-gray-400 my-2'>Year :  <span className='font-semibold  text-black'>{yearOfPublishing}</span></p>
    <p className='text-gray-400 my-2'>Rating : <span className='font-semibold  text-black'>{rating}</span></p>
    <div className='flex gap-6 my-4'>
        <button onClick={()=>handleMarkAsRead(id)} className="btn bg-white text-black border border-black">Read</button>
    <button onClick={()=>handleWishList(id)} className="btn btn-accent text-white">Wishlist</button>
    {/* <ToastContainer /> */}
    </div>
  </div>
</div>
    );
};

export default BookDetails;