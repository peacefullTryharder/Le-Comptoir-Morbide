import React, { Component } from 'react';
import roundSplitMenu from './round_split_menu.svg';
import logo from './logo_cm.svg';

class Header extends Component {
  render() {
    return(
      <header className="App-header">
        <div className="App-header-top">
          <div className="App-header-top-menu-left-triangle">
            <svg height="60" width="35">
              <polygon points="0,0 35,0 35,60" fill="#FFFFF9"/>
            </svg>
          </div>
          <div className="App-header-top-menu">
            <a href="">Accueil</a>
            <img className="roundSplitMenu" src={roundSplitMenu} width="8" height="8" />
            <a href="">Sociologie</a>
            <img className="roundSplitMenu" src={roundSplitMenu} width="8" height="8" />
            <a href="">Téléralité</a>
            <img className="roundSplitMenu" src={roundSplitMenu} width="8" height="8" />
            <a href="">Narcissisme</a>
            <img className="roundSplitMenu" src={roundSplitMenu} width="8" height="8" />
            <a href="">Nihilisme</a>
          </div>
        </div>
        <div className="App-header-bottom">
          <img className="App-header-bottom-logo" src={logo} width="120" height="120"/>
          <div className="App-header-bottom-title">
            <div className="App-header-bottom-title-main">Le comptoir morbide</div>
            <div className="App-header-bottom-title-sub">Lieu de retrouvailles pour des morosophes sans espoir</div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
