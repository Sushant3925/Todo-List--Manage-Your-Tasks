import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar flex justify-around bg-indigo-500 text-white p-4 mb-2 ">
        <div className="logo mx-3 hover:font-bold transition-all cursor-pointer text-xl">iTask</div>
        <ul className='flex gap-4 mx-3  '>
            <li className='hover:font-bold transition-all cursor-pointer text-xl '>Home</li>
            <li className='hover:font-bold transition-all cursor-pointer text-xl '>Your Tasks</li>
        </ul>
    </div>
  )
}

export default Navbar
