import React, { Component } from 'react';
import logo from './logo.svg';

import styled, { keyframes } from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
`
const AppContainer = styled.div`
  text-align: center;
`

const Intro = styled.p`
  font-size: large;

  &.sub {
    font-size: smaller;
  }
`

const SubIntro = styled(Intro)`
  font-size: smaller;
`

const AppLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 80px;
`

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header className="App-header">
          <Logo src={logo} className="App-logo" alt="logo" />
          <Title className="App-title">Welcome to React</Title>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
        <SubIntro>
          Sub intro lorem ipsum sit dolor
        </SubIntro>
      </AppContainer>
    );
  }
}

export default App;
