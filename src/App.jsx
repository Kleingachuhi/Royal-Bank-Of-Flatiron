import React from 'react'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react';
import { data } from 'autoprefixer';
function App() {
  const[transaction, setTransaction] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/transactions')
    .then((response) => response.json())
    .then((data)=> {
    setTransaction(data)
  })
    .catch((err) => console.error('Error, Failed to fetch your data', err))
  }, [])
  return (
<>
<header className='header-element'>The Royal Bank Of Flatiron</header>
  <input type="search" className='search-bar' placeHolder='Search your recent transaction' />

<table>
    <thead>
  <tr>
    <th>Date</th>
    <th>Description</th>
    <th>Category</th>
    <th>Amount</th>
  </tr>
    </thead>
    <tbody>
    {transaction.map((tr) => (
      <tr>
        <td>{tr.date}</td>
        <td>{tr.description}</td>
        <td> {tr.category} </td>
        <td> {tr.amount} </td>
      </tr>
    ))}
    </tbody>
</table>
</>  )
}

export default App