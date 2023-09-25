import React from 'react';

const Header = () => {
  return (
    <header
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        zIndex: 100,
        backgroundColor: 'rgba(255,255,255,0.5)',
        backdropFilter: 'blur(5px)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>header title</div>
        <div>
          <span>intro </span>
          <span>about me </span>
          <span>Tech Stack </span>
          <span>projects </span>
          {/* <span>경력(취업하고 추가)</span> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
