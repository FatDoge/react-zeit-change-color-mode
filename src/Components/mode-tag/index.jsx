import React from 'react';
import './style.css'
import { TiWeatherSunny,TiWeatherNight } from "react-icons/ti";

const ModeTag = (props) => {
  const handleClick = e => {
    props.onSubmit(e === 'dark' ? 'light' : 'dark')
  }

  return <div className='modetag' onClick={() => handleClick(props.colorMode)}>
    {props.colorMode === 'dark' ? <TiWeatherNight/> : <TiWeatherSunny/>}
  </div>
}

export default ModeTag;