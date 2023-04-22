import React from 'react'
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image 
                src="https://links.papareact.com/qd3"
                alt="airbnb-logo"
                layout='fill'
                objectFit='contain'
                objectPosition='left'
            />
        </div>
        <div className='flex items-center md:border-2 rounded-full py-2 px-3 md:shadow-sm'>
            <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' type='text' placeholder='Start your search'/>
            <SearchIcon className='mx-auto hidden md:inline h-8 bg-red-400 text-white rounded-full p-1 cursor-pointer md:mx-2'/>
        </div>
        <div className='flex space-x-4 items-center justify-end text-gray-500 cursor-pointer'>
            <p className='hidden md:inline'>Become a host</p>
            <LanguageIcon className='h-6'/>

            <div className='space-x-2 flex items-center border-2 p-2 rounded-full'>
                <MenuIcon className='h-6'/>
                <AccountCircleIcon className='h-6'/>
            </div>
        </div>
    </header>
  )
}

export default Header