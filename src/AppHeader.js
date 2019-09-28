import React from 'react';
import logo from './logo.svg';
import './AppHeader.css'

function AppHeader() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
        React Demo &mdash; GitHub Profiles
      </h1>
    </header>
  )
}

export default AppHeader