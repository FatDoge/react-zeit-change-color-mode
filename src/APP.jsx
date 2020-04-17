import React,{ useState }  from 'react';
import Footer from './Components/Footer'
import ColorMode from './Components/color-mode'

import Home from './pages/Home'
import './style.css'
import { CSSBaseline, ZEITUIProvider } from '@zeit-ui/react'

const App = () => {
  const [themeType, setThemeType] = useState('light')
  const switchThemes = (theme) => {
    setThemeType(theme)
    localStorage.setItem('color-mode', theme)
  }
  return (
    <ZEITUIProvider theme={{ type: themeType }}>
      <CSSBaseline />
      <div className="container"> 
      <ColorMode handleChange={switchThemes}>
    <Home handleChangeTheme={{switchThemes}} theme={{themeType}}/>
    <Footer/>
    </ColorMode>
  </div>
    </ZEITUIProvider>
  )
}

export default App;