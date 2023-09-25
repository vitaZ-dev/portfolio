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
      <main id="wrap">
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
