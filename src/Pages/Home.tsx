import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import Sidebar from '@/components/ui/Sidebar';
import React from 'react';


const Home: React.FC = () => {
  return (
    <div className="flex overflow-y-auto overflow-x-auto">
      <Sidebar />
      <div className="flex-1 w-10 h-screen">
        <Header />
        <main className="p-4">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Introduction</h2>
          <p className=''>This is the home page!!</p>
        
        </main>
        <Footer />
        <style>
          {`
            body {
              min-height: 100vh;
              overflow: hidden;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Home;
