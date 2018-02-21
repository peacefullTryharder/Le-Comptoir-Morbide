import React, { Component } from 'react';

import SearchIcon from './search.svg';
import FacebookLogo from './facebook-logo.svg';
import TwitterLogo from './twitter-logo.svg';
import YoutubeLogo from './youtube-logo.svg';

class Content extends Component {
  render() {
    return(
      <div className="App-content">
        <div className="App-content-newsfeed">
          <div className="App-content-newsfeed-toptriangle">
            <svg height="20" width="25">
              <polygon points="0,0 25,0 25,20" fill="#6FB4B0"/>
            </svg>
          </div>
        </div>
        <div className="App-content-menu">
          <div className="App-content-menu-toptriangle">
            <svg height="20" width="25">
              <polygon points="0,0 25,0 0,20" fill="#6FB4B0"/>
            </svg>
          </div>
          <div className="App-content-menu-socialnetworks">
            <div id="menu-fb">
              <img src={FacebookLogo} height="22" width="22" />
            </div>
            <div id="menu-twitter">
              <img src={TwitterLogo} height="22" width="22" />
            </div>
            <div id="menu-youtube">
              <img src={YoutubeLogo} height="22" width="22" />
            </div>
          </div>
          <div className="App-content-menu-item">
            <div className="menu-item-title search">Recherche</div>
            <div className="menu-item-content search">
                <input className="menu-search-input" type="text" name="search" />
                <div className="menu-search-submit">
                  <img src={SearchIcon} height="27" width="27" />
                </div>
            </div>
          </div>

          <div className="App-content-menu-item">
            <div className="menu-item-title">Articles récents</div>
            <div className="menu-item-content articles">

              <div className="menu-item-content-article a">
                <div className="menu-article-picture"></div>
                <div className="menu-article-informations">
                  <div className="menu-article-title">De la kératine dans le viagra ?</div>
                  <div className="menu-article-context"><b>Baptiste Ludot</b> | 28.12.2017</div>
                  <div className="menu-article-about">La kératine, de par son apport en fer se retrouve placée parmis les plus gros concurrents de...</div>
                </div>
              </div>

              <div className="menu-item-content-article b">
                <div className="menu-article-picture"></div>
                <div className="menu-article-informations">
                  <div className="menu-article-title">Nietzsche et la mononucléose</div>
                  <div className="menu-article-context"><b>Jean Potin</b> | 18.11.2017</div>
                  <div className="menu-article-about">Si il y a bien un philosophe qui avait le goût de la maladie, c'était sans compter sur... </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Content;
