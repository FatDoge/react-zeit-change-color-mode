import React from 'react'
import { Button, useToasts,Image, Row, Card, Divider, Description  } from '@zeit-ui/react'
import svg from '../../assets/white-triangle.png'
import './index.css';
import ModeTag from '../../Components/mode-tag'


const Home = (props) => {
  const [_, setToast] = useToasts()
  const click = (e) => {
    props.handleChangeTheme.switchThemes(e)
    localStorage.setItem('color-mode',e)
    setToast({ text: 'Change color mode.' })
  }
  return <>
  <Row>
    <div className="header">
      @ZEIT-UI/<a href="https://github.com/zeit-ui/react" target="_blank">React</a>🎈
    </div>
  </Row>
  <Row>
      <Image width="540" height="246" src={svg} />
</Row>
<Row align="center" justify="center">
  <div className="description">
    <Description title="Sync change" content={<>Open Multiple tabs and change color mode below...</>} />
  </div>
</Row>
<Row align="center" justify="center">
  <div className="bottom-group">
    <Button onClick={() => click('light')}>Light</Button>
      <Divider>{props.theme.themeType}</Divider>
    <Button onClick={() => click('dark')}>Dark</Button>
  </div>
</Row>
<ModeTag colorMode={props.theme.themeType} onSubmit={click}/>
    </>
}

export default Home;