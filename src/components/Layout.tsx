import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './HeaderGlobal/Header';
import { Footer } from './Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from './Spinner/Spinner';

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer />
      <Footer />
    </div>
  );
};
