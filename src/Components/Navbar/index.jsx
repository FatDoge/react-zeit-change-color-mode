import React from 'react';
import { Link } from "react-router-dom";
import { Tabs, Row } from '@zeit-ui/react'
import './style.css'

const NavBar = () => (
  <Row>
  <Tabs initialValue="1" className="navbar">
  <Tabs.Item label={<Link to="/" className="link">Home</Link>} value="1">
  </Tabs.Item>
  <Tabs.Item label={<Link to="/about" className="link">About</Link>} value="2">
  </Tabs.Item>
</Tabs>
</Row>
)

export default NavBar;