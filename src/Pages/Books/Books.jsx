import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    return (
        <div>
            <h1 className='text-center font-bold text-5xl mb-5'>Books</h1>
                <Suspense fallback={<span>loading...</span>}>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5'>
                        {
                           data.map((book)=><Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </Suspense>
        </div>
    );
};

export default Books;