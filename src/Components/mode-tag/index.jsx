import React from 'react';
import './style.css'

const ModeTag = (props) => {
  const handleClick = e => {
    props.onSubmit(e === 'dark' ? 'light' : 'dark')
  }

  return <div className='modetag' onClick={() => handleClick(props.colorMode)}>
    {props.colorMode === 'dark' ? '🌑' : '🌕'}
  </div>
}

export default ModeTag;