import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p className='hover:cursor-pointer hover:underline'>How Airbnb works</p>
            <p className='hover:cursor-pointer hover:underline'>Newsroom</p>
            <p className='hover:cursor-pointer hover:underline'>Investors</p>
            <p className='hover:cursor-pointer hover:underline'>Airbnb Plus</p>
            <p className='hover:cursor-pointer hover:underline'>Airbnb Luxe</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p className='hover:cursor-pointer hover:underline'>Accessibility</p>
            <p className='hover:cursor-pointer hover:underline'>This is not a real site</p>
            <p className='hover:cursor-pointer hover:underline'>Its a pretty awesome clone</p>
            <p className='hover:cursor-pointer hover:underline'>Referrals Accepted</p>
            <p className='hover:cursor-pointer hover:underline'>Papa Fam</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p className='hover:cursor-pointer hover:underline'>Papa React</p>
            <p className='hover:cursor-pointer hover:underline'>Presents</p>
            <p className='hover:cursor-pointer hover:underline'>Zero to Full Stack Hero</p>
            <p className='hover:cursor-pointer hover:underline'>Hundreds of Students</p>
            <p className='hover:cursor-pointer hover:underline'>Join Now</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p className='hover:cursor-pointer hover:underline'>Help Centre</p>
            <p className='hover:cursor-pointer hover:underline'>Trust & Safety</p>
            <p className='hover:cursor-pointer hover:underline'>Say Hi to Youtube</p>
            <p className='hover:cursor-pointer hover:underline'>Easter Eggs</p>
            <p className='hover:cursor-pointer hover:underline'>For the Win</p>
        </div>
    </div>
  )
}

export default Footer