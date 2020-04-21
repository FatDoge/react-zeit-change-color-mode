import React, { useState } from "react";
import Footer from "./Components/Footer";
import ColorMode from "./Components/color-mode";

import Home from "./pages/Home";
import About from "./pages/About";
import ModeTag from "./Components/mode-tag";
import Aplayer from "./Components/Aplayer"

import "./style.css";
import { CSSBaseline, ZEITUIProvider } from "@zeit-ui/react";
import NavBar from "./Components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [themeType, setThemeType] = useState("light");
  const switchThemes = (theme) => {
    setThemeType(theme);
    localStorage.setItem("color-mode", theme);
  };
  return (
    <ZEITUIProvider theme={{ type: themeType }}>
      <CSSBaseline />
      <div className="container">
        <Router>
          <div style={{flex: 1}}>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Home
                  handleChangeTheme={{ switchThemes }}
                  theme={{ themeType }}
                />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/dashboard">
                <Home
                  handleChangeTheme={{ switchThemes }}
                  theme={{ themeType }}
                />
              </Route>
            </Switch>
          </div>
        </Router>
        <Aplayer/>

        <ColorMode handleChange={switchThemes}>
          <Footer />
        </ColorMode>
        <ModeTag colorMode={themeType} onSubmit={switchThemes} />
      </div>
    </ZEITUIProvider>
  );
};

export default App;
