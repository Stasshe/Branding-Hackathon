// src/components/Navigator.jsx

import React, { useState, useEffect } from 'react';
import logoImg from '../assets/rippro-logo.bmp'; 

const Navigator = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: isScrolled ? '10px 5%' : '25px 5%',
    position: 'fixed',
    top: 0,
    width: '100%',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 1000,
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
    color: isScrolled ? '#000' : '#fff',
  };

  return (
    <nav style={navStyle}>
      <a href="/" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <img 
          src={logoImg} 
          alt="RiPPro Logo" 
          style={{
            // ★ ロゴのサイズをナビバーの高さに合わせる
            height: isScrolled ? '30px' : '45px', 
            width: 'auto', // 横幅は自動計算
            objectFit: 'contain',
            transition: 'height 0.4s ease'
          }}
        />
      </a>

      <ul style={{ display: 'flex', gap: '30px', alignItems: 'center', listStyle: 'none', fontSize: '14px', fontWeight: 'bold' }}>
        <li className="nav-item">SERVICE</li>
        <li className="nav-item">WORKS</li>
        <li className="nav-item">ABOUT</li>
        <li className="nav-contact" style={{ 
          color: isScrolled ? '#0057ff' : '#fff',
          border: isScrolled ? '1px solid #0057ff' : '1px solid #fff',
          padding: '10px 30px',
          borderRadius: '4px', // DAC風に少し角を立たせる
          marginLeft: '20px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          fontWeight: '900',
          letterSpacing: '1px'
        }}>
          CONTACT
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;