import React from 'react';
const Sidebar: React.FC = () => {
  return (
    <aside className="bg-purple-600 text-white w-36 min-h-screen">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul>
          <li className="mt-8px"><a href="/" className="text-purple-400 hover:text-purple-700">Login</a></li><br/>
          <li className="mt-8px"><a href="/helpcenter" className="text-purple-400 hover:text-purple-700">About</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
