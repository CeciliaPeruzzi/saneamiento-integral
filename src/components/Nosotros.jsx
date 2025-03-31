"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import '../css/nosotros.css';

const Nosotros = () => {
  const { t } = useTranslation('common');

  return (
    <section id="nosotros" className="nosotros-section">
      <div className="nosotros-card">
        <div className="text-content">
          <h2>{t('nosotros.title')}</h2>
          <div className="paragraph-container">
            {t('nosotros.paragraph').split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          
          <h4>{t('nosotros.growth')}</h4>
          <ul>
            <li><strong>En 2022:</strong> {t('nosotros.en2022')}</li>
            <li><strong>En 2023:</strong> {t('nosotros.en2023')}</li>
            <li><strong>En 2024:</strong> {t('nosotros.en2024')}</li>
            <li><strong>En 2025:</strong> {t('nosotros.en2025')}</li>
          </ul>

          <div className="logos-wrapper">
            <div className="empresas-asociadas">
              <h3>{t('nosotros.associated')}</h3>
              <div className="logo-grid">
                <Image src="/images/integralcuyo.png" alt="Integral Cuyo Logo" width={80} height={80} className="logo" />
                <Image src="/images/prevencion.png" alt="Prevención Logo" width={80} height={80} className="logo" />
                <Image src="/images/hen.png" alt="HEN Logo" width={80} height={80} className="logo" />
                <Image src="/images/welderlas1.png" alt="Welderlas Logo" width={110} height={80} className="logo" />
              </div>
            </div>
            
            <div className="casemi-section">
              <h3>{t('nosotros.members')}</h3>
              <div className="logo-grid">
                <Image src="/images/casemi.png" alt="CASMI Logo" width={80} height={80} className="logo" />
                <Image src="/images/camee.png" alt="CAME Logo" width={80} height={80} className="logo" />
                <Image src="/images/ccsjj.png" alt="CCSJ Logo" width={80} height={80} className="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
