"use client";

import React from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';
import '../css/contacto.css';

const Contacto = () => {
  const { t } = useTranslation('common');

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-container">
        <div className="contacto-info">
          <h2 className="contacto-title">{t('contacto.title')}</h2>
          <p>
            <FaWhatsapp className="icon icon-whatsapp" />
            <a href="https://wa.me/5492645792222" target="_blank" rel="noopener noreferrer">
              Br. Juan Pablo Bono: +5492645792222
            </a>
          </p>
          <p>
            <FaWhatsapp className="icon icon-whatsapp" />
            <a href="https://wa.me/5492645863764" target="_blank" rel="noopener noreferrer">
              Ing. Javier Jofré: +5492645863764
            </a>
          </p>
          <p>
            <FaEnvelope className="icon icon-email" />
            <a href="mailto:cuyotradingsas@gmail.com" target="_blank" rel="noopener noreferrer">
              Email: cuyotradingsas@gmail.com
            </a>
          </p>
          <p>
            <FaMapMarkerAlt className="icon icon-location" />
            San Juan, Argentina
          </p>
        </div>
        <div className="mapa">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13650.9156861577!2d-68.53704829399193!3d-31.537524986936337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96826d3c5b3a9f2b%3A0x86596b51e1d47243!2sSan%20Juan%2C%20Argentina!5e0!3m2!1ses-419!2sar!4v1619271366075!5m2!1ses-419!2sar"
            width="100%" 
            height="350" 
            style={{ border: '0', borderRadius: '12px' }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacto;