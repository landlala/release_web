import styled from "styled-components";
import { motion, AnimatePresence, useViewportScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    height: 250vh;
    background-color: black;
    display: grid;
    grid-template-columns: minmax(50px, 0.2fr) 1fr minmax(50px, 0.2fr);
    grid-template-rows: 95px 2fr 9fr 2fr 55px; 
    @media screen and (max-width: 1024px){
        height: 180vh;
    }
    @media screen and (max-width: 540px){
        height: 100vh;
    }
`;

const Nav = styled.div`
    position: sticky;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    grid-column: span 3;
    backdrop-filter: blur(2px);
    border-bottom: 1px solid #4C4D50;
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
    background-color: #F6C117;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
        height: 40%;
        min-height: 12px;
    }
`;

const navItems = {
    normal: {opacity: 0.5},
    hover: {opacity: 1}
};

function About() {
    const moveToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    return (
        <Wrapper>
            <Nav>
                <StyledLink to = "/">
                    <motion.img onClick={moveToTop} src = "/release_web/img/logo.png" />
                </StyledLink>
                <StyledLink to = "/about">
                    <motion.img onClick={moveToTop} style={{opacity: 1}} src = "/release_web/img/about2.png" />
                </StyledLink>
                <StyledLink to = "/books">
                    <motion.img onClick={moveToTop} variants={navItems} initial="normal" whileHover="hover" src = "/release_web/img/books.png" />
                </StyledLink>
                <StyledLink to = "/login">
                    <motion.img onClick={moveToTop} variants={navItems} initial="normal" whileHover="hover" src = "/release_web/img/login.png" />
                </StyledLink>
            </Nav>
            <Footer>
                <img src = "/release_web/img/footer_release.png" />
            </Footer>
        </Wrapper>
    )
}

export default About;