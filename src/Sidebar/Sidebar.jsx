import React from 'react';
import { UilSignOutAlt } from '@iconscout/react-unicons';

import Logo from '../imgs/logo.png';
import { sideBarData } from '../Data/Data';

import './Sidebar.css';
import { useState } from 'react';

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="sideBar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      {/* menu */}
      <div className="menu">
        {sideBarData.map((sideBarItem, index) => {
          return (
            <div
              className={selected === index ? 'menuItem active' : 'menuItem'}
              key={sideBarItem.heading}
              onClick={() => setSelected(index)}
            >
              {sideBarItem.icon}
              <span>{sideBarItem.heading}</span>
            </div>
          );
        })}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
