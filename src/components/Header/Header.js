import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FaMoon, FaSun } from "react-icons/fa";
import {
  HeaderContainer,
  NavContainer,
  NavLink,
  Hamburger,
  HamburgerContainer,
} from "./HeaderStyles";
import { Toggle } from "../../styles/GlobalComponents";

const Header = ({ darkMode }) => {
  const [open, setOpen] = useState(false);

  const HamburgerBubble = () => {
    setOpen(!open);
  };

  return (
    <HeaderContainer>
      <a href="/">
        <Image src="/images/logo.svg" width={40} height={40} alt="Logo" />
      </a>

      <NavContainer open={open}>
        <Toggle onClick={darkMode.toggle} className="header-toggle">
          {darkMode.value ? <FaSun /> : <FaMoon />}
        </Toggle>
        <HamburgerContainer onClick={HamburgerBubble}>
          <Hamburger open={open} />
        </HamburgerContainer>
        <ul>
          <li onClick={HamburgerBubble}>
            <Link href="#about">
              <NavLink>About</NavLink>
            </Link>
          </li>
          <li onClick={HamburgerBubble}>
            <Link href="#skills">
              <NavLink>Skills</NavLink>
            </Link>
          </li>
          <li onClick={HamburgerBubble}>
            <Link href="#projects">
              <NavLink>Projects</NavLink>
            </Link>
          </li>
          <li onClick={HamburgerBubble}>
            <Link href="#contact">
              <NavLink>Contact</NavLink>
            </Link>
          </li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
