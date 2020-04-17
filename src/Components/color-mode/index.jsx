import React from 'react';

const ColorMode = (props) => {
  console.log('init')
  const showStorage = (e) => {
    console.log(e)
    props.handleChange(e.newValue)
  }

  window.onstorage = showStorage

  return <>{props.children}</>
}

export default ColorMode;