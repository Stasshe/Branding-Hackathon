import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1a1a1a', // DACらしい深い黒
    color: '#fff',
    padding: '80px 10% 40px',
    fontSize: '14px'
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '40px',
    marginBottom: '60px'
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  };

  const linkStyle = {
    color: '#aaa',
    textDecoration: 'none',
    transition: 'color 0.3s'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* ロゴエリア */}
        <div style={{ ...columnStyle, flex: '1.5' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '2px', marginBottom: '10px' }}>
            DAC CLONE
          </h2>
          <p style={{ color: '#888', lineHeight: '1.6', maxWidth: '300px' }}>
            デジタル・アドバタイジング・コンソーシアム株式会社<br />
            Empowering the digital future.
          </p>
        </div>

        {/* リンクエリア1 */}
        <div style={columnStyle}>
          <h4 style={{ marginBottom: '10px' }}>SERVICE</h4>
          <a href="#" style={linkStyle} className="footer-link">Media Services</a>
          <a href="#" style={linkStyle} className="footer-link">Solution Services</a>
          <a href="#" style={linkStyle} className="footer-link">Data Business</a>
        </div>

        {/* リンクエリア2 */}
        <div style={columnStyle}>
          <h4 style={{ marginBottom: '10px' }}>COMPANY</h4>
          <a href="#" style={linkStyle} className="footer-link">About Us</a>
          <a href="#" style={linkStyle} className="footer-link">News</a>
          <a href="#" style={linkStyle} className="footer-link">Careers</a>
        </div>
      </div>

      {/* 下部コピーライトエリア */}
      <div style={{ 
        borderTop: '1px solid #333', 
        paddingTop: '30px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        color: '#666',
        fontSize: '12px'
      }}>
        <p>© 2026 DAC CLONE All Rights Reserved.</p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;