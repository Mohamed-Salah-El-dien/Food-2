import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import About from './About/About';
import Services from './Services/Services';
import Products from './Products/Products';
import Test from './Test/Test';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Test />
      <Footer />
    </div>
  );
};

export default Layout;
