"use client";

import React, { useState, Suspense } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import i18next from '../i18n'; 
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { FaBars } from 'react-icons/fa';  // Importamos el ícono de menú hamburguesa
import '../css/navbar.css';

const Navbar = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <NavbarContent />
    </Suspense>
  );
};

const NavbarContent = () => {
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false); // Controlar la visibilidad del menú hamburguesa
  
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = searchParams?.get('lang') || 'es';

  const changeLanguage = async (lang) => {
    if (i18next && i18next.changeLanguage) { 
      await i18next.changeLanguage(lang);
      router.push(`${pathname}?lang=${lang}`);
    } else {
      console.error("El objeto i18n no está disponible o no tiene la función changeLanguage.");
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <Image src="/images/logos.png" alt="Saneamiento Integral" width={70} height={60} />
        </div>

        {/* Menú hamburguesa visible solo en mobile */}
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <FaBars size={24} />
        </div>

        {/* Links de navegación */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#nosotros" onClick={toggleMenu}>{t('navbar.nosotros')}</a></li>
          <li><a href="#servicios" onClick={toggleMenu}>{t('navbar.servicios')}</a></li>
          <li><a href="#empresas" onClick={toggleMenu}>{t('navbar.empresas')}</a></li>
          <li><a href="#contacto" onClick={toggleMenu}>{t('navbar.contacto')}</a></li>
        </ul>

        {/* Selector de idioma */}
        <div className="language-switcher">
          <button onClick={() => changeLanguage('es')} className={currentLocale === 'es' ? 'active' : ''}>ES</button>
          <button onClick={() => changeLanguage('en')} className={currentLocale === 'en' ? 'active' : ''}>EN</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;