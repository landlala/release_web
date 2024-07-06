import styled from "styled-components";
import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  background-color: black;
  display: grid;
  grid-template-columns: minmax(50px, 0.2fr) 1fr minmax(50px, 0.2fr);
  grid-template-rows: 95px 3fr 7fr 1fr 55px;
  @media screen and (max-width: 1024px) {
    height: 100vh;
  }
  @media screen and (max-width: 540px) {
    height: 100vh;
  }
`;

const Nav = styled.div`
  position: sticky;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  grid-column: span 3;
  backdrop-filter: blur(2px);
  border-bottom: 1px solid #4c4d50;
  z-index: 5;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  img {
    height: 20%;
    min-height: 12px;
    &:first-child {
      height: 90%;
      min-height: 20px;
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 20%;
  min-height: 12px;
  &:first-child {
    height: 90%;
    min-height: 20px;
  }
`;

const Footer = styled.div`
  grid-column: span 3;
  grid-row: 5 / 6;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    height: 40%;
    min-height: 12px;
  }
`;

const Box = styled.div`
  background-color: grey;
`;
const BoxComplete = styled.div`
  background-color: black;
`;

const LoginBox = styled.div`
  background-color: #3d3d3d;
  display: grid;
  grid-template-columns: 3fr 5fr;
  div {
    overflow: hidden;
    &:first-child {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      img {
        width: 55%;
        min-height: 30px;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      align-items: center;
      input {
        border-radius: 60px;
        text-align: center;
        width: 250px;
        height: 15%;
      }
      img {
        width: 17%;
        min-height: 30px;
      }
    }
  }
`;

const Intro = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 30px;
  img {
    width: 45%;
    min-height: 30px;
  }
`;

const SideBox = styled.div`
  background-color: #3d3d3d;
  min-height: 250px;
`;

const navItems = {
  normal: { opacity: 0.5 },
  hover: { opacity: 1 },
};

function Login() {
  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Wrapper>
      <Nav>
        <StyledLink to="/">
          <motion.img onClick={moveToTop} src="/release_web/img/logo.png" />
        </StyledLink>
        <StyledLink to="/about">
          <motion.img
            onClick={moveToTop}
            variants={navItems}
            initial="normal"
            whileHover="hover"
            src="/release_web/img/about.png"
          />
        </StyledLink>
        <StyledLink to="/books">
          <motion.img
            onClick={moveToTop}
            variants={navItems}
            initial="normal"
            whileHover="hover"
            src="/release_web/img/books.png"
          />
        </StyledLink>
        <StyledLink to="/login">
          <motion.img
            onClick={moveToTop}
            style={{ opacity: 1 }}
            src="/release_web/img/login2.png"
          />
        </StyledLink>
      </Nav>
      <BoxComplete />
      <Intro>
        <img src="/release_web/img/login/phrase.png" />
      </Intro>
      <BoxComplete />
      <SideBox />
      <LoginBox>
        <div>
          <img src="/release_web/img/login/loginlogo.png" />
        </div>
        <div>
          <input type="text" />
          <input type="text" />
          <img src="/release_web/img/login/button.png" />
        </div>
      </LoginBox>
      <SideBox />
      <Footer>
        <img src="/release_web/img/login/2024.png" />
      </Footer>
    </Wrapper>
  );
}

export default Login;
