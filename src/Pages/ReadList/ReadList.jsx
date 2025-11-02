import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addtodb';
import Book from '../Book/Book';

const ReadList = () => {
    const data = useLoaderData();
    const [readList, setReadList] =useState([]);

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBook = storedBookData.map(id=>parseInt(id));
        const myReadList = data.filter(book=>convertedStoredBook.includes(book.bookId));
        setReadList(myReadList);
    },[])

    return (
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
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    );
};

export default ReadList;