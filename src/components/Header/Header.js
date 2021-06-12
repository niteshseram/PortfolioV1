import Link from "next/link";
import React, { useState } from "react";
import {
  HeaderContainer,
  NavContainer,
  NavLink,
  Hamburger,
  HamburgerContainer,
} from "./HeaderStyles";

const Header = () => {
  const [open, setOpen] = useState(false);

  const HamburgerBubble = () => {
    setOpen(!open);
  };

  return (
    <HeaderContainer>
      <h3>Nitesh</h3>
      <NavContainer open={open}>
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