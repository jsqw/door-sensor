import React from 'react'

const Footer = () => {
  return (
    <div>
      <ul className='container fixed bottom-10 flex place-content-center rounded-lg md:space-x-8'>
        <li>
          <a href='http://safk.at' className='rounded py-2 pl-3 pr-4 text-gray-600 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-gray-200'>safk.at</a>
        </li>
        <li>
          <a href='https://source.club' className='rounded py-2 pl-3 pr-4 text-gray-600 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-gray-200'>source.club</a>
        </li>
        <li>
          <a href='https://discord.com/invite/VWuFkma' className='rounded py-2 pl-3 pr-4 text-gray-600 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-gray-200'>Source Discord</a>
        </li>
      </ul>
    </div>)
}

export default Footer
