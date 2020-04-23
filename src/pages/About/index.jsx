import React from 'react';
import './style.css'
import {Spring} from 'react-spring/renderprops'


class About extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(e) => (
          <div style={e}>
            <div className="about-container">
              <h2>About</h2>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default About;