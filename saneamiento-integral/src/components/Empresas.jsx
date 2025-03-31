"use client";

import React from 'react';
import { FaBuilding, FaIndustry, FaHospital, FaMountain } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';
import '../css/empresas.css';

const Empresas = () => {
  const { t } = useTranslation('common');

  return (
    <section id="empresas" className="empresas-section">
      <div className="empresas-container">
        <h2>{t('empresas.title')}</h2>

        <div className="empresas-grid">
          <div className="empresa-card">
            <FaBuilding className="empresa-icon" />
            <h3>{t('empresas.organismosTitle')}</h3>
            <ul>
              <li>{t('empresas.organismos.0')}</li>
              <li>{t('empresas.organismos.1')}</li>
              <li>{t('empresas.organismos.2')}</li>
              <li>{t('empresas.organismos.3')}</li>
              <li>{t('empresas.organismos.4')}</li>
              <li>{t('empresas.organismos.5')}</li>
              <li>{t('empresas.organismos.6')}</li>
            </ul>
          </div>

          <div className="empresa-card">
            <FaIndustry className="empresa-icon" />
            <h3>{t('empresas.empresasTitle')}</h3>
            <ul>
              <li>San Juan de los Olivos S.A</li>
              <li>Maxiklak</li>
              <li>Maxiconsumo</li>
              <li>Vicuña</li>
              <li>Adidas</li>
              <li>Jugos y vinos Andinos SAU</li>
              <li>Enav SA</li>
              <li>Viñedos pie de palo SA</li>
              <li>Científica Cuyo SRL</li>
              <li>Ledivit SRL</li>
              <li>Tierra del Huarpe SA</li>
              <li>Mosto Mat SA</li>
              <li>Acermat</li>
            </ul>
          </div>

          <div className="empresa-card">
            <FaHospital className="empresa-icon" />
            <h3>{t('empresas.saludTitle')}</h3>
            <ul>
              <li>Clínica INTI</li>
              <li>Clínica Nefro</li>
              <li>Hospital de Media Agua</li>
              <li>Hospital Tomas Perón de Rodeo</li>
              <li>SIM</li>
            </ul>
          </div>

          <div className="empresa-card">
            <FaMountain className="empresa-icon" />
            <h3>{t('empresas.minerasTitle')}</h3>
            <ul>
              <li>Minera Andina del Sol (Barrick)</li>
              <li>Filo Del Sol</li>
              <li>NGEX</li>
              <li>Minas Argentinas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empresas;