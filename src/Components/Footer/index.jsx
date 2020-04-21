import React, { Component } from 'react';
import { Row, Card } from '@zeit-ui/react'
import './index.css';

export default class Footer extends Component {
  render() {
    return <Row>
      <div className="footer">Code&nbsp;by&nbsp;<a href="https://github.com/fatdoge" target="_blank">Fatdoge</a>&nbsp;🦄</div>
      </Row>
  }
}