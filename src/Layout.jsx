import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

const Layout = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='lg:h-[80.5px] h-[33px]'></div>
            <div className='min-h-[calc(100vh-446px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;