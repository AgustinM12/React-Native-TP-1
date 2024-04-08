import React from 'react'

export const Buttom = ({ text, action }) => {
  return (
    <>
      <button className='p-2 rounded-md bg-blue-500 text-white w-64 hover:bg-blue-700 hover:font-bold transition duration-500 ease-in-out transform hover:scale-110'
        onClick={action}>{text}</button>
    </>
  )
}


