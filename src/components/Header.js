import { Link } from "gatsby";
import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const ThemePicker = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const ThemeOptions = styled.div`
  position: absolute;
  background-color: var(--cardColor);
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

  const { theme, setTheme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <header>
      <ThemePicker
        onClick={() => setShown({ ...showOptions, transform: "scale(1.5)" })}
      >
        <span>💡</span>
        <ThemeOptions
          show={showOptions.show}
          scale={showOptions.transform}
          top={showOptions.top}
          right={showOptions.right}
          onMouseLeave={() =>
            setShown({
              ...showOptions,
              transform: "scale(0)",
              top: -100,
              right: -100,
            })
          }
        >
          <span onClick={() => setTheme("light")}>🌞</span>
          <span onClick={() => setTheme("dark")}>🌑</span>
          <span onClick={() => setTheme("retrowave")}>🎉</span>
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
