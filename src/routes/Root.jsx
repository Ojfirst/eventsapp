import React from 'react';
import { Outlet } from 'react-router';

import MainNavigation from '../components/Home/MainNavigation';
import MobileMenu from '../components/Home/MobileMenu';
import { useIsMobile } from '../components/Home/useIsMobile';
import Footer from '../components/Home/Footer';

const RootLayer = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? <MobileMenu /> : <MainNavigation />}
      <main style={{ minHeight: '100vh' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayer;