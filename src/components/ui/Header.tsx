import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-purple-700 text-white p-2 sticky top-0 " >
      <div className="container mx-auto">
      <div className="w-full md:w-1/3">
        <h1 className="text-xl font-bold">Welcome!!</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
