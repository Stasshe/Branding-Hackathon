import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoImg1 from '../assets/rippro-logo.bmp';
import logoImg2 from '../assets/RiSTロゴ.png';

const NAV_ITEMS = [
  { label: 'HOME',     path: '/' },
  { label: 'ABOUT',     path: '/about' },
  { label: 'SCHEDULE',  path: '/schedule' },
  { label: 'GUIDELINE', path: '/guideline' },
  { label: 'SPONSORS',  id: 'sponsors' },
];

const ENTRY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSedrQBRVl9iQsvCj-enYqWWXabb-ieJAuYv-PebJK6nXTNNwg/viewform?usp=publish-editor';

const Navigator = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavClick = (item) => {
    setMenuOpen(false);
    if (item.path) {
      navigate(item.path);
    } else if (item.id) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      } else {
        const el = document.getElementById(item.id);
        if (el) {
          window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 63, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <nav className={`nav-wrap${isScrolled ? ' nav-wrap--compact' : ''}`}>
        <Link to="/" className="nav-logo-group">
          <img src={logoImg2} alt="RiST"   className="nav-logo" />
          <div className="nav-divider" />
          <img src={logoImg1} alt="RiPPro" className="nav-logo" />
        </Link>

        <ul className="nav-list">
          {NAV_ITEMS.map(item => (
            <li
              key={item.label}
              className={`nav-item${item.path && location.pathname === item.path ? ' nav-item--active' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {item.label}
            </li>
          ))}
          <li>
            <button className="nav-entry-btn" onClick={() => window.open(ENTRY_URL, '_blank')}>
              ENTRY
            </button>
          </li>
        </ul>

        <button
          className="nav-hamburger"
          style={{ display: 'none' }}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen
              ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }} style={{ display: 'block' }}><X size={22} /></motion.span>
              : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }} style={{ display: 'block' }}><Menu size={22} /></motion.span>
            }
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1,  y: 0 }}
            exit={{    opacity: 0,  y: -12 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="mobile-menu-body">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.label}
                  className="mobile-menu-item"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1,  x: 0 }}
                  transition={{ delay: 0.04 + i * 0.055 }}
                  onClick={() => handleNavClick(item)}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="mobile-menu-entry-wrap">
                <motion.button
                  className="mobile-menu-entry"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.04 + NAV_ITEMS.length * 0.055 }}
                  onClick={() => { setMenuOpen(false); window.open(ENTRY_URL, '_blank'); }}
                >
                  ENTRY →
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigator;
