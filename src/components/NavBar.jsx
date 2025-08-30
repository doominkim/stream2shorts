import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="logo">stream2shorts</div>
      <div className="login"><Link to="/login">로그인</Link></div>
    </header>
  );
}
