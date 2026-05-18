import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImg1 from '../assets/rippro-logo.bmp';
import logoImg2 from '../assets/RiSTロゴ.png';

const NAV_ITEMS = [
  { label: 'ABOUT', id: 'about' },
  { label: 'SCHEDULE', id: 'schedule' },
  { label: 'GUIDELINE', id: 'rule' },
  { label: 'SPONSORS', id: 'sponsors' },
];

const ENTRY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSedrQBRVl9iQsvCj-enYqWWXabb-ieJAuYv-PebJK6nXTNNwg/viewform?usp=publish-editor';

const Navigator = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }, menuOpen ? 300 : 0);
  };

  const scrolled = isScrolled || menuOpen;
  const textColor = scrolled ? '#000' : '#fff';
  const bgColor = scrolled ? 'rgba(255,255,255,0.97)' : 'transparent';
  const shadow = scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none';

  return (
    <>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: scrolled ? '10px 5%' : '22px 5%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        transition: 'padding 0.4s cubic-bezier(0.4,0,0.2,1), background-color 0.4s, box-shadow 0.4s',
        zIndex: 1000,
        backgroundColor: bgColor,
        boxShadow: shadow,
        color: textColor,
      }}>
        {/* Logos */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }}>
          <img src={logoImg2} alt="RiST" style={{ height: scrolled ? '28px' : '40px', width: 'auto', transition: 'height 0.4s ease' }} />
          <img src={logoImg1} alt="RiPPro" style={{ height: scrolled ? '28px' : '40px', width: 'auto', transition: 'height 0.4s ease' }} />
        </a>

        {/* Desktop nav */}
        <ul style={{
          display: 'flex',
          gap: '28px',
          alignItems: 'center',
          listStyle: 'none',
          fontSize: '13px',
          fontWeight: '900',
          letterSpacing: '0.1em',
          margin: 0,
          padding: 0,
        }} className="nav-desktop">
          {NAV_ITEMS.map(item => (
            <li key={item.id} onClick={() => scrollTo(item.id)} style={{ cursor: 'pointer', color: textColor }} className="nav-item">
              {item.label}
            </li>
          ))}
          <li>
            <button onClick={() => window.open(ENTRY_URL, '_blank')} style={{
              color: scrolled ? '#0057ff' : '#fff',
              border: scrolled ? '1.5px solid #0057ff' : '1.5px solid #fff',
              padding: '9px 22px',
              borderRadius: '2px',
              background: 'none',
              cursor: 'pointer',
              fontWeight: '900',
              fontSize: '13px',
              letterSpacing: '0.1em',
              transition: 'color 0.3s, border-color 0.3s',
            }}>
              ENTRY
            </button>
          </li>
        </ul>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: textColor,
            padding: '4px',
            lineHeight: 0,
          }}
          className="nav-hamburger"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen
              ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} style={{ display: 'block' }}>
                  <X size={26} />
                </motion.span>
              : <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }} style={{ display: 'block' }}>
                  <Menu size={26} />
                </motion.span>
            }
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#fff',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '40px',
            }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.06, duration: 0.3 }}
                onClick={() => scrollTo(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '2rem',
                  fontWeight: '900',
                  letterSpacing: '0.1em',
                  color: '#1a1a1a',
                  cursor: 'pointer',
                }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + NAV_ITEMS.length * 0.06, duration: 0.3 }}
              onClick={() => { setMenuOpen(false); window.open(ENTRY_URL, '_blank'); }}
              style={{
                background: '#0057ff',
                border: 'none',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: '900',
                letterSpacing: '0.15em',
                padding: '16px 48px',
                borderRadius: '2px',
                cursor: 'pointer',
                marginTop: '10px',
              }}
            >
              ENTRY
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigator;
