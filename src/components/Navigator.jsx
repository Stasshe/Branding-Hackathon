// src/components/Navigator.jsx

import React, { useState, useEffect } from 'react';
import logoImg1 from '../assets/rippro-logo.bmp'; 
import logoImg2 from '../assets/RiSTロゴ.png'; 

const Navigator = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSedrQBRVl9iQsvCj-enYqWWXabb-ieJAuYv-PebJK6nXTNNwg/viewform?usp=publish-editor', '_blank');
  };

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
      <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '20px', height: '100%', textDecoration: 'none' }}>
        {/* ★ RiSTロゴを左に配置 */}
        <img 
          src={logoImg2} 
          alt="RiST Logo" 
          style={{ height: isScrolled ? '30px' : '45px', width: 'auto', transition: 'all 0.4s ease' }} 
        />
        {/* ★ RiPProロゴを右に配置 */}
        <img 
          src={logoImg1} 
          alt="RiPPro Logo" 
          style={{ height: isScrolled ? '30px' : '45px', width: 'auto', transition: 'all 0.4s ease' }} 
        />
      </a>

      <ul style={{ display: 'flex', gap: '30px', alignItems: 'center', listStyle: 'none', fontSize: '13px', fontWeight: '900', letterSpacing: '0.1em' }}>
        <li className="nav-item" onClick={() => scrollToSection('about')} style={{ cursor: 'pointer' }}>ABOUT</li>
        <li className="nav-item" onClick={() => scrollToSection('schedule')} style={{ cursor: 'pointer' }}>SCHEDULE</li>
        <li className="nav-item" onClick={() => scrollToSection('rule')} style={{ cursor: 'pointer' }}>RULE</li>
        <li className="nav-item" onClick={() => scrollToSection('sponsors')} style={{ cursor: 'pointer' }}>SPONSORS</li>
        <li className="nav-contact" onClick={handleContactClick} style={{ 
          color: isScrolled ? '#0057ff' : '#fff',
          border: isScrolled ? '1px solid #0057ff' : '1px solid #fff',
          padding: '10px 25px',
          borderRadius: '2px',
          marginLeft: '20px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}>
          ENTRY
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;