import React from 'react';
import { Link } from 'react-router-dom';

export default function SideMenu() {
  return (
    <aside className="side-menu">
      <ul>
        <li><Link to="/clips">클립</Link></li>
        <li><Link to="/shorts">쇼츠</Link></li>
        <li><Link to="/settings">설정</Link></li>
      </ul>
    </aside>
  );
}
