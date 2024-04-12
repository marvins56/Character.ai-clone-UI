import React, { useState } from 'react';
import { FaPlus, FaCompass, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <span className={`logo ${isCollapsed ? 'hidden' : ''}`}>Character AI</span>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isCollapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </button>
      </div>
      <button className="sidebar-btn create">
        <FaPlus />
        <span className={`${isCollapsed ? 'hidden' : ''}`}>Create</span>
      </button>
      <button className="sidebar-btn discover">
        <FaCompass />
        <span className={`${isCollapsed ? 'hidden' : ''}`}>Discover</span>
      </button>
    </aside>
  );
}

export default Sidebar;
