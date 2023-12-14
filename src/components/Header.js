
import React from 'react';
import '../App.css';

const Header = (props) => {
//   console.log("HEELOO")
//   console.log("HOME", props)
  return (
    <>
      <div className='add-to-cart'>
        <span className='cart-count'>{props.data.length}</span>
        <img src='https://th.bing.com/th/id/OIP.Py31Bi72ZK-fmda6jPZ7AQHaHa?w=161&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' alt="realme" />
      </div>
    </>
  );
};

export default Header;
