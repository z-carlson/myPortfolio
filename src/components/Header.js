import { Link } from "gatsby";
import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import TerminalIcon from "../images/svg/terminal.svg";
import SunIcon from "../images/svg/sun.svg";
import MoonIcon from "../images/svg/moon.svg";
import ToolIcon from "../images/svg/tool.svg";

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

  span {
    position: absolute;
    left: 50%;
    top: 50%;
  }
  span:hover {
    cursor: pointer;
  }

  span:nth-child(1) {
    transform: translateX(-80px);
  }

  span:nth-child(2) {
    transform: translateX(-60px) translateY(40px);
  }

  span:nth-child(3) {
    transform: translateX(-20px) translateY(60px);
  }
`;

const Header = () => {
  let defaultState = {
    show: false,
    top: -100,
    right: -100,
    transform: "scale(0)",
  };

  let [showOptions, setShown] = useState(defaultState);

  const { setTheme } = useContext(ThemeContext);

  function handleMouseOut() {
    setShown({
      ...showOptions,
      transform: "scale(0)",
      top: -100,
      right: -100,
    });
  }

  return (
    <header>
      <ThemePicker
        onClick={() => setShown({ ...showOptions, transform: "scale(1.5)" })}
      >
        <button>
          <img src={ToolIcon} alt="open themes" />
        </button>
        <ThemeOptions
          show={showOptions.show}
          scale={showOptions.transform}
          top={showOptions.top}
          right={showOptions.right}
          onMouseLeave={handleMouseOut}
        >
          <button onClick={() => setTheme("light")}>
            <img src={SunIcon} alt="light theme" />
          </button>
          <button onClick={() => setTheme("dark")}>
            <img src={MoonIcon} alt="dark theme" />
          </button>
          <button onClick={() => setTheme("hack3r")}>
            <img src={TerminalIcon} alt="hacker theme" />
          </button>
        </ThemeOptions>
      </ThemePicker>
      <Link to={"/"}>
        <span id="me">Zachary Carlson</span>
      </Link>
      <nav>
        <Link to={"/resume"}>Resume</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
