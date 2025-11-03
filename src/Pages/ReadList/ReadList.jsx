import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook, getWishedBook } from '../../Utility/addtodb';
import Book from '../Book/Book';

const ReadList = () => {
    const data = useLoaderData();
    const [readList, setReadList] =useState([]);
    const [wishList, setWishList] =useState([]);
    const [sort, setSort]=useState("");

    const handleSort = (type)=>{
      setSort(type);
      if(type === "Pages"){
        const sortedByPage = [...readList].sort((a,b)=>a.totalPages - b.totalPages);
        const sortedByWishPage = [...wishList].sort((a,b)=>a.totalPages - b.totalPages);
        setReadList(sortedByPage);
        setWishList(sortedByWishPage);
      }
      if(type === "Ratings"){
        const sortedByRatings = [...readList].sort((a,b)=>b.rating - a.rating);
        const sortedByWishRating = [...wishList].sort((a,b)=>b.rating - a.rating);
        setReadList(sortedByRatings);
        setWishList(sortedByWishRating);
      }
    }
    

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBook = storedBookData.map(id=>parseInt(id));
        const myReadList = data.filter(book=>convertedStoredBook.includes(book.bookId));
        setReadList(myReadList);
    },[])

    useEffect(() => {
         const wishedBookData = getWishedBook();
         const convertedWishedBook = wishedBookData.map(id=>parseInt(id));
         const myWishList = data.filter(book=>convertedWishedBook.includes(book.bookId));
         setWishList(myWishList);
    },[])

    return (
        <div>
          <details className="dropdown flex justify-center my-5">
            <summary className="btn m-1 bg-green-400 text-white">Sort by : {sort? sort : ""} </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><a onClick={()=>handleSort("Pages")}>Pages</a></li>
              <li onClick={()=>handleSort("Ratings")}><a>Ratings</a></li>
            </ul>
          </details>
          <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>Wishlist</Tab>
    </TabList>
 
    <TabPanel>
      <div className='py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
            readList.map(book=><Book key={book.bookId} book={book}></Book>)
        }
      </div>
    </TabPanel>
    <TabPanel>
      <div className='py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
            wishList.map(book=><Book key={book.bookId} book={book}></Book>)
        }
      </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;