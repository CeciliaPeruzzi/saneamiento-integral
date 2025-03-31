"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import i18next from '../i18n'; 
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import '../css/navbar.css';

const Navbar = () => {
  const { t } = useTranslation('common');
  
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = searchParams.get('lang') || 'es';

  const changeLanguage = async (lang) => {
    if (i18next && i18next.changeLanguage) { 
      await i18next.changeLanguage(lang);
      router.push(`${pathname}?lang=${lang}`);
    } else {
      console.error("El objeto i18n no está disponible o no tiene la función changeLanguage.");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <Image src="/images/logos.png" alt="Saneamiento Integral" width={70} height={60} />
        </div>
        <ul className="nav-links">
          <li><a href="#nosotros">{t('navbar.nosotros')}</a></li>
          <li><a href="#servicios">{t('navbar.servicios')}</a></li>
          <li><a href="#empresas">{t('navbar.empresas')}</a></li>
          <li><a href="#contacto">{t('navbar.contacto')}</a></li>
        </ul>
        <div className="language-switcher">
          <button onClick={() => changeLanguage('es')} className={currentLocale === 'es' ? 'active' : ''}>ES</button>
          <button onClick={() => changeLanguage('en')} className={currentLocale === 'en' ? 'active' : ''}>EN</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;