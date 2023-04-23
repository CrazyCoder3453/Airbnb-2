import React from 'react'
import {useState} from 'react'
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {DateRangePicker} from 'react-date-range'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useRouter } from 'next/router';

function Header({placeholder}) {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numGuests, setNumGuests] = useState(1);
    const router = useRouter();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection' 
    }
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    const resetInput = () => {
        setSearchInput('')
    }
    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numGuests
            }
        })
    }

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        <div className='relative flex items-center h-10 cursor-pointer my-auto' onClick={() => router.push("/")}>
                <Image 
                    src="https://links.papareact.com/qd3"
                    alt="airbnb-logo"
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
        </div>
        <div className='flex items-center md:border-2 rounded-full py-2 px-3 md:shadow-sm'>
            <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' type='text' placeholder={placeholder || 'Start your search'}/>
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

        {searchInput && (
            <div className='flex flex-col col-span-3 mx-auto'>
                <DateRangePicker 
                    ranges={[selectionRange]}
                    minDate = {new Date()}
                    rangeColors ={["#FD5B61"]}
                    onChange={handleSelect}
                />
                <div className='flex items-center border-b mb-4'>
                    <h2 className='text-2xl flex-grow font-semibold'>Number of guests</h2>

                    <PeopleAltIcon className='h-5'/>
                    <input value={numGuests} onChange={e => setNumGuests(e.target.value)} min={1} type='number' className='w-12 pl-2 text-lg outline-none text-red-400'/>
                </div>
                <div className='flex'>
                    <button onClick={resetInput} className='text-gray-500 flex-grow'>Cancel</button>
                    <button onClick={search} className='text-red-400 flex-grow'>Search</button>
                </div>
            </div>
        )}
    </header>
  )
}

export default Header