
// src/components/Header.jsx
import React from 'react';
import kaushan from './layout'


const Header = () => {

  return (
    <header className="bg-gradient-header text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold tracking-tight cursor-pointer">
        <a >NexusFlow</a>
      </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
                <a className="cursor-pointer bg-customGreen hover:bg-curstomPurple transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center p-3 rounded-3xl text-lg">Login</a>
            </li>
            <li>
                <a className="cursor-pointer bg-customGreen hover:bg-curstomPurple transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center p-3 rounded-3xl text-lg             ">Formulário</a>
            </li>
            {/* <li>
              <button
                className="cursor-pointer hover:text-blue-300"

              >
                Logout
              </button>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
