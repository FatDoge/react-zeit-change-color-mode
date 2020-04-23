import React from "react";
import {
  Button,
  useToasts,
  Image,
  Row,
  Divider,
  Description,
} from "@zeit-ui/react";
import { TiWeatherSunny,TiWeatherNight } from "react-icons/ti";
import svg from "../../assets/white-triangle.png";
import "./index.css";
import {Spring} from 'react-spring/renderprops'


const Home = (props) => {
  const [_, setToast] = useToasts();
  const click = (e) => {
    props.handleChangeTheme.switchThemes(e);
    localStorage.setItem("color-mode", e);
    setToast({ text: "Change color mode." });
  };
  return (
    <>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(e) => (
          <div style={e}>
            <Row>
              <div className="header">
                @ZEIT-UI/
                <a href="https://github.com/zeit-ui/react" target="_blank">
                  React
                </a>
                🎈 @ZEIT/
                <a href="https://github.com/zeit/now" target="_blank">
                  Now
                </a>
                🎉
              </div>
            </Row>
            <Row>
              <Image width="540" height="246" src={svg} />
            </Row>
            <Row align="center" justify="center">
              <div className="description">
                <Description
                  title="Sync change"
                  content={
                    <>Open Multiple tabs and change color mode below...</>
                  }
                />
              </div>
            </Row>
            <Row align="center" justify="center">
              <div className="bottom-group">
                <Button onClick={() => click("light")}>
                  <TiWeatherSunny />
                  Light
                </Button>
                <Divider>
                  {props.theme.themeType === "dark" ? (
                    <TiWeatherNight />
                  ) : (
                    <TiWeatherSunny />
                  )}
                </Divider>
                <Button onClick={() => click("dark")}>
                  <TiWeatherNight />
                  Dark
                </Button>
              </div>
            </Row>
          </div>
        )}
      </Spring>
    </>
  );
};

export default Home;
