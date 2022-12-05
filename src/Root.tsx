import { Link, Outlet } from 'react-router-dom';
import React from 'react';

export default function Root() {
  return (
    <>
      <nav className="nav">
        <Link className="nav-link" to="/">main</Link>
        <Link className="nav-link" to="/second">second</Link>
        <Link className="nav-link" to="/about">about</Link>
        <Link className="nav-link" to="/level">level</Link>
        <Link className="nav-link" to="/level/second">second level</Link>
      </nav>
      <Outlet/>
    </>
  )
}