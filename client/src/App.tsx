import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Home from './views/Home';

import { lightTheme, darkTheme } from './themes';
import { GlobalStyles } from './App.styles';

function App(): JSX.Element {
  const [theme, setTheme] = useState<boolean>(false);

  const themeToggler = () => {
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={theme? darkTheme : lightTheme}>
      <Router>
        <GlobalStyles />
        <Header isTheme={theme} themeToggler={themeToggler} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
