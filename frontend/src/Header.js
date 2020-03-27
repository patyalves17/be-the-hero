import React from 'react';

const Header = props => {
  return (
    <header>
      <h1>{props.children}</h1>
    </header>
  );
};

export default Header;
