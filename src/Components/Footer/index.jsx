import React, { Component } from 'react';
import { Row, Card } from '@zeit-ui/react'
import './index.css';

export default class Footer extends Component {
  render() {
    return <Row>
      <Card>
      <div className="footer">CODE BY FATDOGE & ZEIT-UI-REACT</div>
      </Card>
      </Row>
  }
}