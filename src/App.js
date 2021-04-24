import React, { useState, useRef } from 'react';
import './App.css';
import starbucks_log from './images/starbucks_logo.png';
import SearchIcon from '@material-ui/icons/Search';

const App = () => {
  const inputRef = useRef();
  const [add_class_name, setAdd_class_name] = useState('');
  return (
    <body>
      <header>
        <div className="inner">
          <a href="/" className="logo">
            <img src={starbucks_log} alt="Starbucks" />
          </a>
          <div className="sub-menu">
            <ul className="menu">
              <li>
                <a href="/signin">Sign In</a>
              </li>
              <li>
                <a href="javascript:void(0)">My Starbucks</a>
              </li>
              <li>
                <a href="javascript:void(0)">Customer Service & Idess</a>
              </li>
              <li>
                <a href="javascript:void(0)">Find a Store</a>
              </li>
            </ul>
            <div className={'search ' + add_class_name}>
              <input
                type="text"
                ref={inputRef}
                onFocus={(e) => (e.target.placeholder = '통합검색')}
                onBlur={(e) => {
                  e.target.placeholder = '';
                  setAdd_class_name('');
                }}
              />
              <div
                className="focused material-icons"
                onClick={() => {
                  inputRef.current.focus();
                  setAdd_class_name('focused');
                }}
              >
                <SearchIcon color="secondary" style={{ color: 'black ' }} />
              </div>
            </div>
          </div>
          <ul className="main-menu">
            <li className="item">
              <div className="item__name">COFFEE</div>
              <div className="item__contents"></div>
            </li>
            <li className="item">
              <div className="item__name">MENU</div>
              <div className="item__contents"></div>
            </li>
            <li className="item">
              <div className="item__name">STORE</div>
              <div className="item__contents"></div>
            </li>
            <li className="item">
              <div className="item__name">RESPONSIBILITY</div>
              <div className="item__contents"></div>
            </li>
            <li className="item">
              <div className="item__name">MY STARBUCKS REWARDS</div>
              <div className="item__contents"></div>
            </li>
            <li className="item">
              <div className="item__name">WHAT`S NEW</div>
              <div className="item__contents"></div>
            </li>
          </ul>
        </div>
      </header>
    </body>
  );
};

export default App;
