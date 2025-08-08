import React from 'react';
import { Outlet } from 'react-router';

import MainNavigation from '../components/Home/MainNavigation';

const RootLayer = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>

    </>
  )
}

export default RootLayer