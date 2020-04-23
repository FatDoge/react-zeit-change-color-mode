import React from 'react';
import { Link } from "react-router-dom";
import { Tabs, Row } from '@zeit-ui/react'
import './style.css'

const NavBar = () => {
  return (
  <Row>
  <Tabs initialValue={window.location.pathname} className="navbar">
  <Tabs.Item label={<Link to="/" className="link">HOME</Link>} value="/">
  </Tabs.Item>
  <Tabs.Item label={<Link to="/about" className="link">ABOUT</Link>} value="/about">
  </Tabs.Item>
</Tabs>
</Row>
)}

export default NavBar;