import React from 'react';
import './style.css'

const ModeTag = (props) => {
  return <div className='modetag'>
    {props.colorMode === 'dark' ? '🌑' : '🌕'}
  </div>
}

export default ModeTag;