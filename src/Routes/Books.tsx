import styled from "styled-components";
import { motion, AnimatePresence, useViewportScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts, { IPosts } from "./Posts";
import Pagination from "./Pagination";

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

const Box = styled.div`
    background-color: #3D3D3D;
`;

const BoxComplete = styled.div`
    background-color: black;
`;

const BookList = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    overflow: hidden;
    gap: 30px;
    @media screen and (max-width: 540px){
        grid-template-rows: repeat(6, 1fr);
    }
`;

const SideBook = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 30px;
    @media screen and (max-width: 540px){
        grid-template-rows: repeat(4, 1fr);
    }
`;

const SideBox = styled.div`
    background-color: #3D3D3D;
    min-height: 250px;  
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

const Phrase = styled(motion.div)`
    img {
        height: 10%;
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

const Text = styled.div`
    color: white;
    height: 15px;
`;

function Books() {
    const moveToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(12);
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            setPosts(response.data);
            setLoading(false);
        };
        fetchData();
    }, []);
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    
    function checkMediaQuery() {
        if (window.matchMedia("(max-width: 540px)").matches) {
            return smallBookScreen();
        } else {
            return largeBookScreen();
        }
    }
    function smallBookScreen() {
        const currentPosting = (posts: any, contents: number) => {
            let currentPosts = [];
            currentPosts = posts.slice(indexOfFirst + contents * 2, indexOfFirst + contents * 2 + 2);
            return currentPosts;
        }
        return (
            <>
                <SideBook>
                    <SideBox /><SideBox /><SideBox /><SideBox /><SideBox /><SideBox />
                </SideBook>
                <BookList>
                    <Posts posts={currentPosting(posts, 0)} loading={loading}></Posts>
                    <Posts posts={currentPosting(posts, 1)} loading={loading}></Posts>
                    <Posts posts={currentPosting(posts, 2)} loading={loading}></Posts>
                    <Posts posts={currentPosting(posts, 3)} loading={loading}></Posts>
                    <Posts posts={currentPosting(posts, 4)} loading={loading}></Posts>
                    <Posts posts={currentPosting(posts, 5)} loading={loading}></Posts>
                </BookList>
                <SideBook>
                    <SideBox /><SideBox /><SideBox /><SideBox /><SideBox /><SideBox />
                </SideBook>
            </>
        );
    }
    function largeBookScreen() {
        const currentPosting = (posts: any, contents: number) => {
            let currentPosts = [];
            currentPosts = posts.slice(indexOfFirst + contents * 4, indexOfFirst + contents * 4 + 4);
            return currentPosts;
        }
        return (
            <>
                <SideBook>
                    <SideBox /><SideBox /><SideBox />
                </SideBook>
                <BookList>
                    <Posts posts={currentPosting(posts, 0)} loading={loading}></Posts>
                    <Posts posts={currentPosting(posts, 1)} loading={loading}></Posts>
                    <Posts posts={currentPosting(posts, 2)} loading={loading}></Posts>
                </BookList>
                <SideBook>
                    <SideBox /><SideBox /><SideBox />
                </SideBook>
            </>
        );
    }

    return (
        <Wrapper>
            <Nav>
                <StyledLink to = "/">
                    <motion.img onClick={moveToTop} src = "../../img/logo.png" />
                </StyledLink>
                <StyledLink to = "/about">
                    <motion.img onClick={moveToTop} variants={navItems} initial="normal" whileHover="hover" src = "../../img/about.png" />
                </StyledLink>
                <StyledLink to = "/books">
                    <motion.img onClick={moveToTop} style={{opacity: 1}} src = "../../img/books2.png" />
                </StyledLink>
                <StyledLink to = "/login">
                    <motion.img onClick={moveToTop} variants={navItems} initial="normal" whileHover="hover" src = "../../img/login.png" />
                </StyledLink>
            </Nav>
            <BoxComplete />
            <Intro>
                <img src="../../img/books/phrase.png" />
            </Intro>
            <BoxComplete />
            {checkMediaQuery()};
            <BoxComplete>
                <Pagination
                    postsPerPage = {postsPerPage}
                    currentPage = {currentPage}
                    totalPosts = {posts.length}
                    paginate = {setCurrentPage}
                >
                </Pagination>
            </BoxComplete>
            <BoxComplete />
            <Footer>
                <img src = "../../img/footer_release.png" />
            </Footer>
        </Wrapper>
    )
}

export default Books;