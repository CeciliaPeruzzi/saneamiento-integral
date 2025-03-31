"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import '../css/footer.css';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-text-container">
          <div className="footer-logo">
            <Image src="/images/logofoo.png" alt={t('Saneamiento Integral Logo')} width={80} height={40} />
          </div>
          <p>{t('footer.text')}</p> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;