import React from 'react';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>header title</div>
      <div>
        <span>intro </span>
        <span>about me </span>
        <span>Tech Stack </span>
        <span>projects </span>
        {/* <span>경력(취업하고 추가)</span> */}
      </div>
    </header>
  );
};

export default Header;
