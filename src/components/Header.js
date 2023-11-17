import React from 'react';

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Your App Name</h1>
      {/* Add any other header content here */}
    </header>
  );
};

export default Header;
