import { CssBaseline, IconButton, useTheme, createTheme } from "@mui/material";
import * as React from "react";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import "../styles/css/index.css";
import Box from "@mui/material/Box";
import lightTheme from "@/styles/theme/lightTheme";
import darkTheme from "@/styles/theme/darkTheme";
import Header from "@/components/Header";
import Layout from "@/components/Layout";


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [mode, setMode] = React.useState('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const darkThemeChosen = React.useMemo(
    () => 
      createTheme({...darkTheme}), [mode]
  );
  const lightThemeChosen = React.useMemo(
    () => 
      createTheme({...lightTheme}), [mode]
  )



  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === 'dark' ? darkThemeChosen :  lightThemeChosen}>
        <SessionProvider session={session}>
        <CssBaseline/>
          <Header ColorModeContext={ColorModeContext}/>
          <Layout>
          <Component {...pageProps} />

          </Layout>
        </SessionProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
