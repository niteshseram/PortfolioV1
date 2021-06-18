import styled from "styled-components";

export const HeaderContainer = styled.header`
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 10vh;
  padding: 0px 50px;

  .header-toggle {
    display: none;
    @media ${(props) => props.theme.breakpoints.md} {
      display: flex;
      margin-right: 10px;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 20px;
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    padding: 0 10px;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    @media ${(props) => props.theme.breakpoints.md} {
      position: absolute;
      top: 0;
      right: 0;
      height: 100vh;
      width: 100%;
      background-color: ${(props) => props.theme.bubble};
      transition: all 1s ease-out;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      z-index: 1;

      ${(props) => {
        if (props.open) {
          return `
            opacity: 0.9;
            clip-path: circle(2000px at 90% -10%);
            -webkit-clip-path: circle(2000px at 90% -10%);
            pointer-events: all;
            z-index: 1;
          `;
        } else {
          return `
          clip-path: circle(10px at 110% -10%);
          -webkit-clip-path: circle(10px at 110% -10%);
          pointer-events: none;
          opacity: 0;
          `;
        }
      }}
    }

    li {
      padding: 0 35px;
      position: relative;
      cursor: pointer;

      &:after {
        content: "";
        position: absolute;
        background-color: ${(props) => props.theme.secondary};
        height: 3px;
        width: 0%;
        left: 49%;
        bottom: -10px;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
      }

      &:hover:after {
        width: 100%;
        left: 0;
      }
    }
  }
`;

export const NavLink = styled.a`
  line-height: 32px;
  transition: all 0.1s ease-in;
  text-transform: uppercase;
  font-weight: 700;
`;

export const HamburgerContainer = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  display: none;
  z-index: 2;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
  }
`;

// Hamburger Icon
export const Hamburger = styled.div`
  z-index: 2;
  width: 35px;
  height: 3px;
  background: ${(props) => props.theme.text.primary};
  border-radius: 5px;
  transition: all 0.5s ease-in-out;

  &:before,
  &:after {
    content: "";
    position: absolute;
    cursor: pointer;
    width: 35px;
    height: 3px;
    background: ${(props) => props.theme.text.primary};
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }

  &::before {
    transform: translateY(-8px);
  }

  &:after {
    transform: translateY(8px);
  }

  ${(props) => {
    if (props.open) {
      return `
      transform: translateX(-50px);
      background: transparent;
      box-shadow: none;

      &:before{
        transform: rotate(45deg) translate(35px, -35px);
      }
      &:after{
        transform: rotate(-45deg) translate(35px, 35px);
      }
      `;
    }
  }}
`;
