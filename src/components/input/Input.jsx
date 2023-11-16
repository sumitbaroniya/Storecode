import React from 'react'
import { useState } from 'react';
import './input.css'

function Input() {

  const [storeCode, setStoreCode] = useState('');

  const handleStoreCodeChange = (e) => {
    setStoreCode(e.target.value);
  };

  const handleSearch = () => {
    console.log('Search button clicked with store code:', storeCode);
  };

  return (
      <div className='inputFormCont'>
      <h2>Shop with Storecode</h2>
      <div className="inputContainer">
        <input
          type="text"
          value={storeCode}
          onChange={handleStoreCodeChange}
          placeholder="Enter product code"
        />
      </div>
      <button className='searchBtn' onClick={handleSearch}>Search</button>
      </div>
  )
}

export default Input