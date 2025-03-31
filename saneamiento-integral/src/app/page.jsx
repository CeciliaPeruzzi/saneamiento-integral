"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import LandingHeader from '../components/LandingHeader';
import Nosotros from '../components/Nosotros';
import Servicios from '../components/Servicios';
import Empresas from '../components/Empresas';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <LandingHeader />
        <Nosotros />
        <Servicios />
        <Empresas />
        <Contacto />
        <Footer />
      </main>
    </>
  );
};

export default Home;