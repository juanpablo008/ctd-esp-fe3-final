import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../Context/Context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Navbar = () => {

  const { theme, changeTheme } = useAppContext();

  const onClickChangeTheme = () => {
    changeTheme();
  }

  return (
    <nav className='flex justify-between items-center p-5 bg-gray-200 text-2xl'>
      <h2><Link to="/" >DH<b className='text-indigo-800'>Dentist</b></Link></h2>
      <ul className='flex gap-4'>
        <li className='hover:text-indigo-800'><Link to="/" >Home</Link></li>
        <li className='hover:text-indigo-800'><Link to="/contact" >Contact</Link></li>
        <li className='hover:text-indigo-800'><Link to="/favs" >Favorites</Link></li>
        <button className='bg-slate-50 rounded-lg text-indigo-800 hover:text-indigo-600 dark:text-yellow-500 dark:hover:text-yellow-300 px-1' onClick={onClickChangeTheme}>
          {
            theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            )
          }
        </button>
      </ul>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    </nav>
  )
}