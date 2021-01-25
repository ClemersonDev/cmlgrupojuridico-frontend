import React from 'react';
import { stack as Menu } from 'react-burger-menu';

export default (props) => {
  return (
    <Menu {...props}>
      <a className="menu-item" id="menu-link" href="/">
        Home
      </a>

      <a className="menu-item" id="menu-link" href="/acting">
        Áreas de atuação
      </a>

      <a className="menu-item" id="menu-link" href="/about">
        O escritório
      </a>

      <a className="menu-item" id="menu-link" href="/contact">
        Fale conosco
      </a>
    </Menu>
  );
};