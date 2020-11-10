import React from 'react';
import Main from './pages/Main/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import Toggle from "./components/Toggler/Toggler"
import  {useDarkMode} from "./components/Helpers/";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';
import { lightTheme, darkTheme } from './styles/Theme'

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <Router>
          <Switch>
            <Route path='/' render={() => {
              return (
                <>
                  <Main />
                  <Route path='/project/:id' component={ProjectDetails} />
                </>
              )
            }} />
          </Switch>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
