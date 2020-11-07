import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'
import './WithPopout.scss';

function WithPopout() {
  const [showMenu, setShowMenu] = useState(false)
  const toggleShowMenu = () => setShowMenu(!showMenu)

  const [showPopout, setShowPopout] = useState(false)
  const togglePopout = () => setShowPopout(!showPopout)
  const openPopout = () => setShowPopout(true)
  const closePopout = () => setShowPopout(false)

  return (
    <div className="with-popout">
      <header>
        <nav>
          <div className="logo">Logo</div>
          <ul className={`nav-links ${showMenu ? "" : "hide"}`}>
            <a href="#"><li>First Link</li></a>
            <a href="#"><li>Second Link</li></a>
            <a href="#"><li>Third Link</li></a>
            <a href="#"><li>Fourth Link</li></a>
            <a onClick={togglePopout}><li>
              <div className="pop-out">
                  Popout
                <div
                  className={`pop-out-container ${showPopout ? "is-open" : ""}`}
                >
                <div className="pop-out-title">
                  popout container
                </div>
                <div className="pop-out-content">
                  Popout content
                </div>
                </div>
              </div>
            </li>
            </a>
          </ul>
          <div className="menu-toggle" onClick={toggleShowMenu}>
            <FaBars />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default WithPopout;
