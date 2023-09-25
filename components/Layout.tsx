import React from 'react';
import Header from './Header';
import Footer from './Footer';

type WrapperProps = {
  children: React.ReactNode;
};
const Layout: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main id="wrap">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
