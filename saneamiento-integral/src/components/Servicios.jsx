"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import '../css/servicios.css';

const Servicios = () => {
  const { t } = useTranslation('common');

  return (
    <section id="servicios" className="servicios-section">
      <h2>{t('servicios.title')}</h2>
      
      <div className="servicios-grid">
        <div className="servicio-card">
          <Image src="/images/quimica.png" alt="Saneamiento Ambiental" width={400} height={250} />
          <div className="card-content">
            <h3>{t('servicios.items.saneamientoAmbiental.title')}</h3>
            <p>{t('servicios.items.saneamientoAmbiental.description')}</p>
          </div>
        </div>

        <div className="servicio-card">
          <Image src="/images/fumigador.png" alt="Manejo de Plagas" width={400} height={250} />
          <div className="card-content">
            <h3>{t('servicios.items.manejoPlagas.title')}</h3>
            <p>{t('servicios.items.manejoPlagas.description.intro')}</p>
            <p><strong>{t('servicios.items.manejoPlagas.description.methodsTitle')}</strong></p>
            <p><strong>{t('servicios.items.manejoPlagas.description.methods.biologicos.title')}</strong>: {t('servicios.items.manejoPlagas.description.methods.biologicos.description')}</p>
            <p><strong>{t('servicios.items.manejoPlagas.description.methods.fisicos.title')}</strong>: {t('servicios.items.manejoPlagas.description.methods.fisicos.description')}</p>
            <p><strong>{t('servicios.items.manejoPlagas.description.methods.culturales.title')}</strong>: {t('servicios.items.manejoPlagas.description.methods.culturales.description')}</p>
            <p><strong>{t('servicios.items.manejoPlagas.description.methods.quimicos.title')}</strong>: {t('servicios.items.manejoPlagas.description.methods.quimicos.description')}</p>
          </div>
        </div>

        <div className="servicio-card">
          <Image src="/images/matafuego.png" alt="Seguridad Contra Incendios" width={400} height={250} />
          <div className="card-content">
            <h3>{t('servicios.items.seguridadContraIncendios.title')}</h3>
            <p>{t('servicios.items.seguridadContraIncendios.description')}</p>
          </div>
        </div>

        <div className="servicio-card">
          <Image src="/images/mantenimiento.png" alt="Ingeniería" width={400} height={250} />
          <div className="card-content">
            <h3>{t('servicios.items.ingenieria.title')}</h3>
            <p>{t('servicios.items.ingenieria.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;