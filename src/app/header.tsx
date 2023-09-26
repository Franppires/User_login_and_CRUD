
// src/components/Header.jsx
import React from 'react';
import Link from 'next/link';
import { SignOut } from './components/signOut';


const Header = () => {
  return (
     <header className="text-white w-full h-20 flex items-center bg-gradient-header fixed">  
      <nav className='w-full flex items-center justify-between m-auto max-w-screen-xl p-4'>
        <Link href='/' className='text-4xl'>NexusFlow</Link>
        <ul className="flex items-center gap-5">
            <li><Link href='/' className="cursor-pointer bg-customGreen hover:bg-curstomDarkPurple transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center p-2 rounded-3xl text-lg">Home</Link></li>
            <li><Link href="/public" className="cursor-pointer bg-customGreen hover:bg-curstomDarkPurple transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center p-2 rounded-3xl text-lg">Login</Link> </li>
            {/* <li><Link href='/private'className="cursor-pointer bg-customGreen hover:bg-curstomDarkPurple transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center p-2 rounded-3xl text-lg">Formulário</Link></li> */}
            <li><SignOut /></li>
          </ul>
      </nav>
    </header>
  );
};

export default Header;
