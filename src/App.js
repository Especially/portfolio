import React from "react";
import Main from "./layouts/Main/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Toggle from "./components/Toggler/Toggler";
import { useDarkMode } from "./hooks/useMeasure";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { lightTheme, darkTheme } from "./styles/Theme";
import ErrorPage from "./pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [{ path: "/project/:id", element: <ProjectDetails /> }],
  },
]);

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <RouterProvider router={router} />
      </>
    </ThemeProvider>
  );
}

export default App;
