import React from 'react';
import '../App.css';

const Home = (props) => {
  console.log("HEELOO")
  console.log("HOME", props)
  return (
    <>
      {/* <div className='add-to-cart'>
        <span className='cart-count'>{props.length}</span>
        <img src='https://th.bing.com/th/id/OIP.Py31Bi72ZK-fmda6jPZ7AQHaHa?w=161&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' alt="realme" />
      </div> */}

      <h1>Home</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src='https://cellularnews.com/wp-content/uploads/2020/04/realme-phones.jpg' alt="realme" />
        </div>
        <div className='text-wrapper item'>
          <span>
            Realme
          </span>
          <span>
            Price : $200
          </span>
        </div>
        <div className='btn-wrapper item'>
          <button onClick={() => props.addToCartHandler()}>Add to Cart</button>
          <br/>
          <button className='remove-cart-btn' onClick={() => props.removeToCartHandler()}>Remove to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Home;
