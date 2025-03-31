"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import '../css/landingheader.css';

const LandingHeader = () => {
    const { t } = useTranslation('common');
    return (
      <section className="landing-header">
        <div className="content-wrapper">
          <div className="earth-container">
            <Image src="/images/logo-mund.png" alt="Earth Image" width={700} height={700} className="earth-image" />
          </div>
          <div className="header-text">
            <h1>{t('landingHeader.title')}</h1>
            <p>{t('landingHeader.subtitle')}</p>  
            <Link href="#nosotros" className="learn-more-button">
              {t('landingHeader.button')}
            </Link>
          </div>
        </div>
      </section>
    );
};

export default LandingHeader;