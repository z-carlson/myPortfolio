import { Link } from 'gatsby';
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import TerminalIcon from '../images/svg/terminal.svg';
import SunIcon from '../images/svg/sun.svg';
import MoonIcon from '../images/svg/moon.svg';
import ToolIcon from '../images/svg/settings.svg';
import CloseIcon from '../images/svg/x-circle.svg';

const ThemePicker = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;

  button {
    background: none;
    border: none;
  }

  button:hover {
    cursor: pointer;
  }
`;

const ThemeOptions = styled.div`
  position: absolute;
  background-color: var(--cardColor);
  color: var(--textColor);
  width: 200px;
  height: 200px;
  border-radius: 50%;

  top: ${(props) => props.top}px;
  right: ${(props) => props.right}px;

  transform: ${(props) => props.scale};
  transition: 0.2s all ease;

  &:hover {
    cursor: auto;
  }

  button {
    background: none;
    border: none;

    position: absolute;
    left: 50%;
    top: 50%;
  }

  button:hover {
    cursor: pointer;
  }

  button:nth-child(1) {
    transform: translateX(-80px);
  }

  button:nth-child(2) {
    transform: translateX(-60px) translateY(40px);
  }

  button:nth-child(3) {
    transform: translateX(-20px) translateY(60px);
  }

  button:nth-child(4) {
    transform: translateX(-25px);
  }
`;

const Header = () => {
  let defaultState = {
    show: false,
    top: -100,
    right: -100,
    transform: 'scale(0)',
  };

  let [showOptions, setShown] = useState(defaultState);

  const { setTheme } = useContext(ThemeContext);

  function handleMouseOut() {
    console.log('click');

    setShown({
      show: false,
      transform: 'scale(0)',
      top: -100,
      right: -100,
    });

    console.log(showOptions);
  }

  return (
    <header>
      <ThemePicker
        onClick={() =>
          setShown({ ...showOptions, transform: 'scale(1.5)', show: true })
        }
      >
        <button>
          <img src={ToolIcon} alt="open themes" />
        </button>
        {showOptions.show && (
          <ThemeOptions
            show={showOptions.show}
            scale={showOptions.transform}
            top={showOptions.top}
            right={showOptions.right}
            onMouseLeave={handleMouseOut}
          >
            <button onClick={() => setTheme('light')}>
              <img src={SunIcon} alt="light theme" />
            </button>
            <button onClick={() => setTheme('dark')}>
              <img src={MoonIcon} alt="dark theme" />
            </button>
            <button onClick={() => setTheme('hack3r')}>
              <img src={TerminalIcon} alt="hacker theme" />
            </button>
            <button onClickCapture={() => handleMouseOut()}>
              <img src={CloseIcon} alt="close options" />
            </button>
          </ThemeOptions>
        )}
      </ThemePicker>
      <Link to={'/'}>
        <span id="me">Zachary Carlson</span>
      </Link>
      <nav>
        <Link to={'/resume'}>Resume</Link>
        <Link to={'/contact'}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
