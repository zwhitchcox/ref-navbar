import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'
import './Standard.scss';

function Standard() {
  const [showMenu, setShowMenu] = useState(false)
  const toggleShowMenu = () => setShowMenu(!showMenu)
  return (
    <div className="standard">
      <header>
        <nav>
          <div className="logo">Logo</div>
          <ul className={`nav-links ${showMenu ? "" : "hide"}`}>
            <a href="#"><li>First Link</li></a>
            <a href="#"><li>Second Link</li></a>
            <a href="#"><li>Third Link</li></a>
            <a href="#"><li>Fourth Link</li></a>
            <a href="#"><li>Second Link</li></a>
          </ul>
          <div className="menu-toggle" onClick={toggleShowMenu}>
            <FaBars />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Standard;
