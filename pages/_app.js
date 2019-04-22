import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from '../constants/theme';

class MyApp extends App {
  render() {
    const {
      Component, pageProps, store
    } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default MyApp;
