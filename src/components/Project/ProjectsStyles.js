import styled from "styled-components";

export const SectionBody = styled.div``;

export const ProjectContainer = styled.li`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  a {
    color: ${(props) => props.theme.colors.secondary};
  }
  &:last-of-type {
    margin-bottom: 30px;
  }
  &:not(:last-of-type) {
    margin-bottom: 100px;
    @media ${(props) => props.theme.breakpoints.md} {
      margin-bottom: 70px;
    }
    @media ${(props) => props.theme.breakpoints.xs} {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;
      @media ${(props) => props.theme.breakpoints.lg} {
        grid-column: 5 / -1;
      }
      @media ${(props) => props.theme.breakpoints.md} {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media ${(props) => props.theme.breakpoints.xs} {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;
      @media ${(props) => props.theme.breakpoints.md} {
        justify-content: flex-start;
      }
      li {
        margin: 0 0 5px 20px;
        @media ${(props) => props.theme.breakpoints.md} {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
      @media ${(props) => props.theme.breakpoints.md} {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;
      @media ${(props) => props.theme.breakpoints.md} {
        grid-column: 1 / -1;
        div > img {
          height: 400px;
        }
      }
    }
  }
  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }
    @media ${(props) => props.theme.breakpoints.md} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }
    @media ${(props) => props.theme.breakpoints.xs} {
      padding: 30px 25px 20px;
    }
  }
  .project-title {
    font-size: clamp(24px, 5vw, 28px);
    @media (min-width: 768px) {
      margin: 0 0 20px;
    }
    @media ${(props) => props.theme.breakpoints.md} {
      a {
        position: static;
        &:before {
          content: "";
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }
  .project-description {
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.primary};
    font-size: 1.8rem;
    box-shadow: 5px 5px 10px ${(props) => props.theme.colors.buttonShadow1};
    @media ${(props) => props.theme.breakpoints.md} {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;
      font-size: 1.6rem;
      &:hover {
        box-shadow: none;
      }
    }
    a {
      color: white;
    }
  }
  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;
    li {
      margin: 0 20px 5px 0;
      font-family: ${(props) => props.theme.fonts.fira};
      font-size: 1.5rem;
      white-space: nowrap;
    }
    @media ${(props) => props.theme.breakpoints.md} {
      margin: 10px 0;
      li {
        margin: 0 10px 5px 0;
      }
    }
  }
  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    a {
      padding: 10px;
      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }
      svg {
        color: white;
        width: 20px;
        height: 20px;
        transition: all 0.3s ease-out;
      }
      &:hover {
        svg {
          color: ${(props) => props.theme.colors.secondary};
          transition: all 0.3s ease-in;
        }
      }
    }
  }
  .project-image {
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    .img {
      max-width: 100% !important;
    }
    z-index: 1;
    @media ${(props) => props.theme.breakpoints.md} {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }
    a {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      vertical-align: middle;
      &:hover,
      &:focus {
        background: transparent;
        outline: 0;
        &:before,
        .img {
          background: transparent !important;
          filter: none !important;
        }
      }
      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        background-color: ${(props) => props.theme.colors.secondary};
        mix-blend-mode: screen;
      }
    }
    .img {
      border-radius: 5px;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);
      @media ${(props) => props.theme.breakpoints.md} {
        object-fit: cover !important;
        width: auto !important;
        height: 400px !important;
      }
    }
  }
`;
