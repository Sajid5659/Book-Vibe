 import React from 'react';
 import bookimage from '../../assets/books.jpg'
 
 const Banner = () => {
    return (
        <div className="hero bg-base-200 p-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bookimage}
      className="max-w-3/12 h-60 rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Boi Poka</h1>
      <p className="py-6">
       Discover a world of stories, wisdom, and imagination all in one place. From timeless classics to modern bestsellers, explore, wishlist, and track your favorite reads effortlessly!
      </p>
      <button className="btn bg-green-500 text-white border border-black">Get Started</button>
    </div>
  </div>
</div>
    );
 };
 
 export default Banner;