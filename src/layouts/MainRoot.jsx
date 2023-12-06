import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainRoot = () => {
    return (
        <div className='bg-white min-h-screen text-black flex flex-col'>
            <Header />
            <main className='py-10 grow'>
                <div>
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MainRoot;