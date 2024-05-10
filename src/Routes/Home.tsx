import styled from "styled-components";
import { motion, AnimatePresence, useViewportScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

const Wrapper = styled.div`
    height: 250vh;
    background-color: black;
    display: grid;
    grid-template-columns: minmax(50px, 0.2fr) 1fr minmax(50px, 0.2fr);
    grid-template-rows: 95px 5fr 4fr 4fr 55px; 
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

const LogoPlay = styled(motion.div)`
    background-color: black;
    grid-column: 2 / 3;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const Svgs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    padding-top: 60px;
    svg {
        min-height: 30px;
    }
`;

const Svg = styled(motion.svg)`
    position: absolute;
    min-height: 100px;
`;

const BoxOne = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1.3fr 1fr 0.5fr;
    div {
        overflow: hidden;
        &:first-child {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            img {
                width: 80%;
                min-height: 30px;
            }
        }
        &:nth-child(2) {
            grid-column: 2 / 3;
            grid-row: 1 / 3;
            display: flex;
            align-items: flex-end;
            img {
                width: 60%;
                min-height: 30px;
            }
        }
    }
`;

const BoxTwo = styled.div`
    display: grid;
    grid-template-rows: 4fr 1fr;
    div {
        overflow: hidden;
        &:first-child {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 35%;
                min-height: 30px;
            }
        }
    }
`;

const Box = styled.div`
    background-color: grey;
`;

const BoxComplete = styled.div`
    background-color: black;
`;

const svg1 = {
    start: {
      pathLength: 0,
      fill: "rgb(0, 0, 0)",
    },
    end: {
      pathLength: 1,
      fill: "#F5C019",
      transition: {
        pathLength: {delay: 1, type: "spring", duration: 7},
        fill: {delay: 4.2, duration: 0.3}
      }
    }
};

const svg2 = {
    start: {
      pathLength: 0,
      fill: "rgb(0, 0, 0)",
    },
    end: {
      pathLength: 1,
      fill: "#F5C019",
      opacity: 0.6,
      transition: {
        pathLength: {delay: 1, type: "spring", duration: 7},
        fill: {delay: 4.2, duration: 0.3}
      }
    }
};

const svg3 = {
    start: {
      pathLength: 0,
      fill: "rgb(0, 0, 0)",
    },
    end: {
      pathLength: 1,
      fill: "#F5C019",
      opacity: 0.3,
      transition: {
        pathLength: {delay: 1, type: "spring", duration: 7},
        fill: {delay: 4.2, duration: 0.3}
      }
    }
};

const svg4 = {
    start: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    end: {
      pathLength: 1,
      fill: "#fefffe",
      transition: {
        pathLength: {delay: 1, type: "spring", duration: 7},
        fill: {delay: 4.2, duration: 0.3}
      }
    }
};

const svg5 = {
    start: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    end: {
      pathLength: 1,
      fill: "#f6bf14",
      transition: {
        pathLength: {delay: 1, type: "spring", duration: 7},
        fill: {delay: 4.2, duration: 0.3}
      }
    }
};

const navItems = {
    normal: {opacity: 0.5},
    hover: {opacity: 1}
};

function Home() {
    const moveToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }
    const {scrollYProgress} = useViewportScroll();
    const scaleOne = useTransform(scrollYProgress, [0, 0.5], [0, 1.0]);
    const scaleTwo = useTransform(scrollYProgress, [0.5, 1.0], [0, 1.0]);

    const login = () => {
        axios({
            url: "http://jinnysoo.iptime.org:8005/members/login",
            method: "post",
            data: {
                id: 20230000,
                password: "54321"
            }
        }).then((response: any) => {
            console.log(response)
        })
    }

    return (
        
        <Wrapper>
            <Nav>
                <StyledLink to = "/">
                    <motion.img onClick={moveToTop} src = "/release_web/img/logo.png" />
                </StyledLink>
                <StyledLink to = "/about">
                    <motion.img onClick={moveToTop} variants={navItems} initial="normal" whileHover="hover" src = "/release_web/img/about.png" />
                </StyledLink>
                <StyledLink to = "/books">
                    <motion.img onClick={moveToTop} variants={navItems} initial="normal" whileHover="hover" src = "/release_web/img/books.png" />
                </StyledLink>
                <StyledLink to = "/login">
                    <motion.img onClick={moveToTop} variants={navItems} initial="normal" whileHover="hover" src = "/release_web/img/login.png" />
                </StyledLink>
            </Nav>
            <BoxComplete />
            <LogoPlay>
                <Svgs>
                    <motion.svg xmlns="http://www.w3.org/2000/svg" version="1.1" width= "35vw" viewBox="0 0 400 100">
                            <g transform="scale(0.1, 0.1)" fill-rule="evenodd">
                            <motion.path variants={svg1} initial="start" animate = "end" stroke="white" strokeWidth="12" d="M 22.5,263.5 C 169.178,263.028 315.844,263.528 462.5,265C 503.919,266.586 541.919,278.586 576.5,301C 639.34,355.523 661.84,423.689 644,505.5C 631.663,546.832 607.496,579.332 571.5,603C 558.946,610.778 545.946,617.778 532.5,624C 569.294,691.754 605.96,759.587 642.5,827.5C 671.826,828.5 701.159,828.833 730.5,828.5C 730.5,866.833 730.5,905.167 730.5,943.5C 661.163,943.833 591.83,943.5 522.5,942.5C 471.667,844.167 420.833,745.833 370,647.5C 344.241,646.505 318.408,646.172 292.5,646.5C 292.5,707.167 292.5,767.833 292.5,828.5C 320.833,828.5 349.167,828.5 377.5,828.5C 377.5,866.833 377.5,905.167 377.5,943.5C 258.833,943.5 140.167,943.5 21.5,943.5C 21.5,905.167 21.5,866.833 21.5,828.5C 52.8333,828.5 84.1667,828.5 115.5,828.5C 115.5,678.833 115.5,529.167 115.5,379.5C 84.2599,379.829 53.0932,379.496 22,378.5C 21.1734,340.095 21.3401,301.762 22.5,263.5 Z M 292.5,379.5 C 322.502,379.333 352.502,379.5 382.5,380C 447.549,385.708 473.716,420.541 461,484.5C 453.986,504.18 440.82,518.014 421.5,526C 407.996,531.368 393.996,534.701 379.5,536C 350.521,537.383 321.521,537.883 292.5,537.5C 292.5,484.833 292.5,432.167 292.5,379.5 Z"/>
                            <motion.path variants={svg1} initial="start" animate = "end" stroke="white" strokeWidth="12" d="M 1337.5,263.5 C 1412.83,263.5 1488.17,263.5 1563.5,263.5C 1563.5,453.833 1563.5,644.167 1563.5,834.5C 1586.17,834.5 1608.83,834.5 1631.5,834.5C 1631.5,870.833 1631.5,907.167 1631.5,943.5C 1533.5,943.5 1435.5,943.5 1337.5,943.5C 1337.5,907.167 1337.5,870.833 1337.5,834.5C 1362.5,834.5 1387.5,834.5 1412.5,834.5C 1412.5,680.833 1412.5,527.167 1412.5,373.5C 1387.5,373.5 1362.5,373.5 1337.5,373.5C 1337.5,336.833 1337.5,300.167 1337.5,263.5 Z"/>
                            <motion.path variants={svg1} initial="start" animate = "end" stroke="white" strokeWidth="12" d="M 1937.5,458.5 C 2025.27,454.982 2095.77,487.649 2149,556.5C 2170.34,590.164 2184,626.831 2190,666.5C 2193.87,690.346 2195.7,714.346 2195.5,738.5C 2078.17,738.5 1960.83,738.5 1843.5,738.5C 1846.02,802.18 1878.36,840.68 1940.5,854C 1968.27,858.871 1994.61,854.538 2019.5,841C 2038.73,829.609 2056.4,816.109 2072.5,800.5C 2111.45,813.04 2150.45,825.373 2189.5,837.5C 2168.67,872.83 2140.34,900.664 2104.5,921C 2058.61,944.78 2009.77,955.947 1958,954.5C 1910.54,955.507 1865.04,946.674 1821.5,928C 1750.13,892.252 1708.29,834.752 1696,755.5C 1687.44,694.851 1697.44,637.517 1726,583.5C 1774.26,504.765 1844.76,463.099 1937.5,458.5 Z M 1932.5,559.5 C 1987.58,557.452 2023.08,582.785 2039,635.5C 2040.81,641.723 2041.98,648.056 2042.5,654.5C 1977.17,654.5 1911.83,654.5 1846.5,654.5C 1849.17,629.626 1858.01,607.293 1873,587.5C 1889.29,570.572 1909.13,561.239 1932.5,559.5 Z"/>
                            <motion.path variants={svg1} initial="start" animate = "end" stroke="white" strokeWidth="12" d="M 2491.5,458.5 C 2524.45,458.135 2557.12,460.968 2589.5,467C 2618.17,473.105 2644.5,484.438 2668.5,501C 2704.16,532.56 2721.66,572.394 2721,620.5C 2722.41,691.823 2722.91,763.157 2722.5,834.5C 2747.83,834.5 2773.17,834.5 2798.5,834.5C 2798.5,870.833 2798.5,907.167 2798.5,943.5C 2722.5,943.5 2646.5,943.5 2570.5,943.5C 2570.67,931.495 2570.5,919.495 2570,907.5C 2505.15,953.586 2435.32,962.753 2360.5,935C 2284.57,899.972 2256.07,841.472 2275,759.5C 2284.42,730.485 2300.92,706.318 2324.5,687C 2357.33,661.491 2394.67,647.158 2436.5,644C 2482.83,640.532 2527.33,648.032 2570,666.5C 2570.83,651.803 2570.49,637.136 2569,622.5C 2559.47,583.455 2534.64,561.622 2494.5,557C 2469.04,554.225 2445.04,558.892 2422.5,571C 2412.37,578.131 2402.54,585.631 2393,593.5C 2353.53,586.206 2314.03,579.039 2274.5,572C 2273.57,571.612 2272.91,570.945 2272.5,570C 2293.6,527.576 2326.26,497.576 2370.5,480C 2409.72,465.909 2450.06,458.742 2491.5,458.5 Z M 2482.5,734.5 C 2501.44,736.236 2519.44,741.402 2536.5,750C 2547.82,755.66 2558.82,761.827 2569.5,768.5C 2570.67,781.487 2570.83,794.487 2570,807.5C 2556.02,819.82 2541.18,830.987 2525.5,841C 2510.15,850.008 2493.65,855.174 2476,856.5C 2438.3,852.5 2418.14,831.5 2415.5,793.5C 2416.3,767.867 2428.63,750.367 2452.5,741C 2462.34,737.423 2472.34,735.256 2482.5,734.5 Z"/>
                            <motion.path variants={svg1} initial="start" animate = "end" stroke="white" strokeWidth="12" d="M 3603.5,458.5 C 3691.27,454.982 3761.77,487.649 3815,556.5C 3838.84,594.01 3853.17,635.01 3858,679.5C 3860.49,699.09 3861.66,718.756 3861.5,738.5C 3744.17,738.5 3626.83,738.5 3509.5,738.5C 3512.02,802.18 3544.36,840.68 3606.5,854C 3634.27,858.871 3660.61,854.538 3685.5,841C 3704.73,829.609 3722.4,816.109 3738.5,800.5C 3777.45,813.04 3816.45,825.373 3855.5,837.5C 3827.23,884.515 3787.23,917.682 3735.5,937C 3687.34,952.869 3638.01,958.202 3587.5,953C 3537.94,949.624 3492.61,934.291 3451.5,907C 3400.8,869.136 3370.97,818.636 3362,755.5C 3353.44,694.851 3363.44,637.517 3392,583.5C 3440.26,504.765 3510.76,463.099 3603.5,458.5 Z M 3598.5,559.5 C 3653.58,557.452 3689.08,582.785 3705,635.5C 3706.88,641.714 3708.04,648.048 3708.5,654.5C 3643.17,654.5 3577.83,654.5 3512.5,654.5C 3515.17,629.626 3524.01,607.293 3539,587.5C 3555.47,570.959 3575.3,561.625 3598.5,559.5 Z"/>
                            <motion.path variants={svg1} initial="start" animate = "end" stroke="white" strokeWidth="12" d="M 1010.5,458.5 C 1097.73,454.878 1167.9,487.212 1221,555.5C 1240.43,584.766 1253.43,616.766 1260,651.5C 1265.74,680.217 1268.57,709.217 1268.5,738.5C 1151.17,738.5 1033.83,738.5 916.5,738.5C 917.237,795.03 944.237,832.196 997.5,850C 1029.51,859.88 1060.51,857.213 1090.5,842C 1110.68,830.665 1129.01,816.831 1145.5,800.5C 1184.64,812.77 1223.64,825.437 1262.5,838.5C 1226.22,896.232 1174.55,932.398 1107.5,947C 1045.16,959.223 983.495,956.556 922.5,939C 848.812,913.979 799.978,864.479 776,790.5C 764.494,744.074 763.494,697.407 773,650.5C 792.823,571.349 839.656,514.516 913.5,480C 944.72,467.258 977.054,460.092 1010.5,458.5 Z M 1004.5,559.5 C 1057.16,556.731 1092.33,580.064 1110,629.5C 1112.63,637.671 1114.46,646.004 1115.5,654.5C 1050.17,654.5 984.833,654.5 919.5,654.5C 921.879,624.914 933.546,599.747 954.5,579C 969.419,567.863 986.085,561.363 1004.5,559.5 Z"/>
                            <motion.path variants={svg1} initial="start" animate = "end" stroke="white" strokeWidth="12" d="M 3005.5,463.5 C 3041.07,461.506 3076.07,465.006 3110.5,474C 3122.39,477.184 3133.89,481.351 3145,486.5C 3145.19,481.25 3145.69,476.083 3146.5,471C 3182.5,470.5 3218.5,470.333 3254.5,470.5C 3254.5,516.5 3254.5,562.5 3254.5,608.5C 3218.17,608.5 3181.83,608.5 3145.5,608.5C 3141.16,593.99 3132.49,582.823 3119.5,575C 3095.92,563.249 3070.92,558.083 3044.5,559.5C 3028.71,558.637 3013.38,560.803 2998.5,566C 2981.46,573.588 2975.29,586.422 2980,604.5C 2986.98,613.418 2996.15,618.918 3007.5,621C 3045.73,629.204 3084.06,636.871 3122.5,644C 3152.41,649.725 3181.41,658.392 3209.5,670C 3264.56,699.941 3290.06,746.441 3286,809.5C 3280.3,868.415 3250.8,910.582 3197.5,936C 3153.98,952.899 3108.98,958.565 3062.5,953C 3039.13,951.326 3017.13,944.993 2996.5,934C 2991.04,930.213 2985.88,926.046 2981,921.5C 2980.5,928.826 2980.33,936.159 2980.5,943.5C 2943.5,943.5 2906.5,943.5 2869.5,943.5C 2869.5,889.167 2869.5,834.833 2869.5,780.5C 2906.5,780.333 2943.5,780.5 2980.5,781C 2982.5,802.999 2992.5,820.332 3010.5,833C 3035.61,848.444 3062.94,855.11 3092.5,853C 3111.26,852.647 3128.59,847.647 3144.5,838C 3161.09,825.805 3165.26,810.305 3157,791.5C 3149.93,783.046 3141.1,777.213 3130.5,774C 3122.21,771.511 3113.88,769.178 3105.5,767C 3070.26,761.183 3035.26,754.183 3000.5,746C 2969.1,738.131 2939.44,726.131 2911.5,710C 2857.03,671.606 2839.87,620.439 2860,556.5C 2876.96,519.88 2904.12,493.713 2941.5,478C 2962.26,470.048 2983.59,465.215 3005.5,463.5 Z"/>
                            </g>
                    </motion.svg>
                    <motion.svg xmlns="http://www.w3.org/2000/svg" version="1.1" width= "35vw" viewBox="0 0 400 100">
                        <g transform="scale(0.1, 0.1)" fill-rule="evenodd">
                            <motion.path variants={svg2} initial="start" animate = "end" stroke="white" strokeWidth="12" d="M 22.5,263.5 C 169.178,263.028 315.844,263.528 462.5,265C 503.919,266.586 541.919,278.586 576.5,301C 639.34,355.523 661.84,423.689 644,505.5C 631.663,546.832 607.496,579.332 571.5,603C 558.946,610.778 545.946,617.778 532.5,624C 569.294,691.754 605.96,759.587 642.5,827.5C 671.826,828.5 701.159,828.833 730.5,828.5C 730.5,866.833 730.5,905.167 730.5,943.5C 661.163,943.833 591.83,943.5 522.5,942.5C 471.667,844.167 420.833,745.833 370,647.5C 344.241,646.505 318.408,646.172 292.5,646.5C 292.5,707.167 292.5,767.833 292.5,828.5C 320.833,828.5 349.167,828.5 377.5,828.5C 377.5,866.833 377.5,905.167 377.5,943.5C 258.833,943.5 140.167,943.5 21.5,943.5C 21.5,905.167 21.5,866.833 21.5,828.5C 52.8333,828.5 84.1667,828.5 115.5,828.5C 115.5,678.833 115.5,529.167 115.5,379.5C 84.2599,379.829 53.0932,379.496 22,378.5C 21.1734,340.095 21.3401,301.762 22.5,263.5 Z M 292.5,379.5 C 322.502,379.333 352.502,379.5 382.5,380C 447.549,385.708 473.716,420.541 461,484.5C 453.986,504.18 440.82,518.014 421.5,526C 407.996,531.368 393.996,534.701 379.5,536C 350.521,537.383 321.521,537.883 292.5,537.5C 292.5,484.833 292.5,432.167 292.5,379.5 Z"/>
                            <motion.path variants={svg2} initial="start" animate = "end" stroke="white" strokeWidth="12" d="M 1337.5,263.5 C 1412.83,263.5 1488.17,263.5 1563.5,263.5C 1563.5,453.833 1563.5,644.167 1563.5,834.5C 1586.17,834.5 1608.83,834.5 1631.5,834.5C 1631.5,870.833 1631.5,907.167 1631.5,943.5C 1533.5,943.5 1435.5,943.5 1337.5,943.5C 1337.5,907.167 1337.5,870.833 1337.5,834.5C 1362.5,834.5 1387.5,834.5 1412.5,834.5C 1412.5,680.833 1412.5,527.167 1412.5,373.5C 1387.5,373.5 1362.5,373.5 1337.5,373.5C 1337.5,336.833 1337.5,300.167 1337.5,263.5 Z"/>
                            <motion.path variants={svg2} initial="start" animate = "end" stroke="white" strokeWidth="12" d="M 1937.5,458.5 C 2025.27,454.982 2095.77,487.649 2149,556.5C 2170.34,590.164 2184,626.831 2190,666.5C 2193.87,690.346 2195.7,714.346 2195.5,738.5C 2078.17,738.5 1960.83,738.5 1843.5,738.5C 1846.02,802.18 1878.36,840.68 1940.5,854C 1968.27,858.871 1994.61,854.538 2019.5,841C 2038.73,829.609 2056.4,816.109 2072.5,800.5C 2111.45,813.04 2150.45,825.373 2189.5,837.5C 2168.67,872.83 2140.34,900.664 2104.5,921C 2058.61,944.78 2009.77,955.947 1958,954.5C 1910.54,955.507 1865.04,946.674 1821.5,928C 1750.13,892.252 1708.29,834.752 1696,755.5C 1687.44,694.851 1697.44,637.517 1726,583.5C 1774.26,504.765 1844.76,463.099 1937.5,458.5 Z M 1932.5,559.5 C 1987.58,557.452 2023.08,582.785 2039,635.5C 2040.81,641.723 2041.98,648.056 2042.5,654.5C 1977.17,654.5 1911.83,654.5 1846.5,654.5C 1849.17,629.626 1858.01,607.293 1873,587.5C 1889.29,570.572 1909.13,561.239 1932.5,559.5 Z"/>
                            <motion.path variants={svg2} initial="start" animate = "end" stroke="white" strokeWidth="12" d="M 2491.5,458.5 C 2524.45,458.135 2557.12,460.968 2589.5,467C 2618.17,473.105 2644.5,484.438 2668.5,501C 2704.16,532.56 2721.66,572.394 2721,620.5C 2722.41,691.823 2722.91,763.157 2722.5,834.5C 2747.83,834.5 2773.17,834.5 2798.5,834.5C 2798.5,870.833 2798.5,907.167 2798.5,943.5C 2722.5,943.5 2646.5,943.5 2570.5,943.5C 2570.67,931.495 2570.5,919.495 2570,907.5C 2505.15,953.586 2435.32,962.753 2360.5,935C 2284.57,899.972 2256.07,841.472 2275,759.5C 2284.42,730.485 2300.92,706.318 2324.5,687C 2357.33,661.491 2394.67,647.158 2436.5,644C 2482.83,640.532 2527.33,648.032 2570,666.5C 2570.83,651.803 2570.49,637.136 2569,622.5C 2559.47,583.455 2534.64,561.622 2494.5,557C 2469.04,554.225 2445.04,558.892 2422.5,571C 2412.37,578.131 2402.54,585.631 2393,593.5C 2353.53,586.206 2314.03,579.039 2274.5,572C 2273.57,571.612 2272.91,570.945 2272.5,570C 2293.6,527.576 2326.26,497.576 2370.5,480C 2409.72,465.909 2450.06,458.742 2491.5,458.5 Z M 2482.5,734.5 C 2501.44,736.236 2519.44,741.402 2536.5,750C 2547.82,755.66 2558.82,761.827 2569.5,768.5C 2570.67,781.487 2570.83,794.487 2570,807.5C 2556.02,819.82 2541.18,830.987 2525.5,841C 2510.15,850.008 2493.65,855.174 2476,856.5C 2438.3,852.5 2418.14,831.5 2415.5,793.5C 2416.3,767.867 2428.63,750.367 2452.5,741C 2462.34,737.423 2472.34,735.256 2482.5,734.5 Z"/>
                            <motion.path variants={svg2} initial="start" animate = "end" stroke="white" strokeWidth="12" d="M 3603.5,458.5 C 3691.27,454.982 3761.77,487.649 3815,556.5C 3838.84,594.01 3853.17,635.01 3858,679.5C 3860.49,699.09 3861.66,718.756 3861.5,738.5C 3744.17,738.5 3626.83,738.5 3509.5,738.5C 3512.02,802.18 3544.36,840.68 3606.5,854C 3634.27,858.871 3660.61,854.538 3685.5,841C 3704.73,829.609 3722.4,816.109 3738.5,800.5C 3777.45,813.04 3816.45,825.373 3855.5,837.5C 3827.23,884.515 3787.23,917.682 3735.5,937C 3687.34,952.869 3638.01,958.202 3587.5,953C 3537.94,949.624 3492.61,934.291 3451.5,907C 3400.8,869.136 3370.97,818.636 3362,755.5C 3353.44,694.851 3363.44,637.517 3392,583.5C 3440.26,504.765 3510.76,463.099 3603.5,458.5 Z M 3598.5,559.5 C 3653.58,557.452 3689.08,582.785 3705,635.5C 3706.88,641.714 3708.04,648.048 3708.5,654.5C 3643.17,654.5 3577.83,654.5 3512.5,654.5C 3515.17,629.626 3524.01,607.293 3539,587.5C 3555.47,570.959 3575.3,561.625 3598.5,559.5 Z"/>
                            <motion.path variants={svg2} initial="start" animate = "end" stroke="white" strokeWidth="12" d="M 1010.5,458.5 C 1097.73,454.878 1167.9,487.212 1221,555.5C 1240.43,584.766 1253.43,616.766 1260,651.5C 1265.74,680.217 1268.57,709.217 1268.5,738.5C 1151.17,738.5 1033.83,738.5 916.5,738.5C 917.237,795.03 944.237,832.196 997.5,850C 1029.51,859.88 1060.51,857.213 1090.5,842C 1110.68,830.665 1129.01,816.831 1145.5,800.5C 1184.64,812.77 1223.64,825.437 1262.5,838.5C 1226.22,896.232 1174.55,932.398 1107.5,947C 1045.16,959.223 983.495,956.556 922.5,939C 848.812,913.979 799.978,864.479 776,790.5C 764.494,744.074 763.494,697.407 773,650.5C 792.823,571.349 839.656,514.516 913.5,480C 944.72,467.258 977.054,460.092 1010.5,458.5 Z M 1004.5,559.5 C 1057.16,556.731 1092.33,580.064 1110,629.5C 1112.63,637.671 1114.46,646.004 1115.5,654.5C 1050.17,654.5 984.833,654.5 919.5,654.5C 921.879,624.914 933.546,599.747 954.5,579C 969.419,567.863 986.085,561.363 1004.5,559.5 Z"/>
                            <motion.path variants={svg2} initial="start" animate = "end" stroke="white" strokeWidth="12" d="M 3005.5,463.5 C 3041.07,461.506 3076.07,465.006 3110.5,474C 3122.39,477.184 3133.89,481.351 3145,486.5C 3145.19,481.25 3145.69,476.083 3146.5,471C 3182.5,470.5 3218.5,470.333 3254.5,470.5C 3254.5,516.5 3254.5,562.5 3254.5,608.5C 3218.17,608.5 3181.83,608.5 3145.5,608.5C 3141.16,593.99 3132.49,582.823 3119.5,575C 3095.92,563.249 3070.92,558.083 3044.5,559.5C 3028.71,558.637 3013.38,560.803 2998.5,566C 2981.46,573.588 2975.29,586.422 2980,604.5C 2986.98,613.418 2996.15,618.918 3007.5,621C 3045.73,629.204 3084.06,636.871 3122.5,644C 3152.41,649.725 3181.41,658.392 3209.5,670C 3264.56,699.941 3290.06,746.441 3286,809.5C 3280.3,868.415 3250.8,910.582 3197.5,936C 3153.98,952.899 3108.98,958.565 3062.5,953C 3039.13,951.326 3017.13,944.993 2996.5,934C 2991.04,930.213 2985.88,926.046 2981,921.5C 2980.5,928.826 2980.33,936.159 2980.5,943.5C 2943.5,943.5 2906.5,943.5 2869.5,943.5C 2869.5,889.167 2869.5,834.833 2869.5,780.5C 2906.5,780.333 2943.5,780.5 2980.5,781C 2982.5,802.999 2992.5,820.332 3010.5,833C 3035.61,848.444 3062.94,855.11 3092.5,853C 3111.26,852.647 3128.59,847.647 3144.5,838C 3161.09,825.805 3165.26,810.305 3157,791.5C 3149.93,783.046 3141.1,777.213 3130.5,774C 3122.21,771.511 3113.88,769.178 3105.5,767C 3070.26,761.183 3035.26,754.183 3000.5,746C 2969.1,738.131 2939.44,726.131 2911.5,710C 2857.03,671.606 2839.87,620.439 2860,556.5C 2876.96,519.88 2904.12,493.713 2941.5,478C 2962.26,470.048 2983.59,465.215 3005.5,463.5 Z"/>
                        </g>
                    </motion.svg>
                    <motion.svg xmlns="http://www.w3.org/2000/svg" version="1.1" width= "35vw" viewBox="0 0 400 100">
                        <g transform="scale(0.1, 0.1)" fill-rule="evenodd">
                            <motion.path variants={svg3} initial="start" animate = "end" stroke="white" strokeWidth="12" d="M 22.5,263.5 C 169.178,263.028 315.844,263.528 462.5,265C 503.919,266.586 541.919,278.586 576.5,301C 639.34,355.523 661.84,423.689 644,505.5C 631.663,546.832 607.496,579.332 571.5,603C 558.946,610.778 545.946,617.778 532.5,624C 569.294,691.754 605.96,759.587 642.5,827.5C 671.826,828.5 701.159,828.833 730.5,828.5C 730.5,866.833 730.5,905.167 730.5,943.5C 661.163,943.833 591.83,943.5 522.5,942.5C 471.667,844.167 420.833,745.833 370,647.5C 344.241,646.505 318.408,646.172 292.5,646.5C 292.5,707.167 292.5,767.833 292.5,828.5C 320.833,828.5 349.167,828.5 377.5,828.5C 377.5,866.833 377.5,905.167 377.5,943.5C 258.833,943.5 140.167,943.5 21.5,943.5C 21.5,905.167 21.5,866.833 21.5,828.5C 52.8333,828.5 84.1667,828.5 115.5,828.5C 115.5,678.833 115.5,529.167 115.5,379.5C 84.2599,379.829 53.0932,379.496 22,378.5C 21.1734,340.095 21.3401,301.762 22.5,263.5 Z M 292.5,379.5 C 322.502,379.333 352.502,379.5 382.5,380C 447.549,385.708 473.716,420.541 461,484.5C 453.986,504.18 440.82,518.014 421.5,526C 407.996,531.368 393.996,534.701 379.5,536C 350.521,537.383 321.521,537.883 292.5,537.5C 292.5,484.833 292.5,432.167 292.5,379.5 Z"/>
                            <motion.path variants={svg3} initial="start" animate = "end" stroke="white" strokeWidth="12" d="M 1337.5,263.5 C 1412.83,263.5 1488.17,263.5 1563.5,263.5C 1563.5,453.833 1563.5,644.167 1563.5,834.5C 1586.17,834.5 1608.83,834.5 1631.5,834.5C 1631.5,870.833 1631.5,907.167 1631.5,943.5C 1533.5,943.5 1435.5,943.5 1337.5,943.5C 1337.5,907.167 1337.5,870.833 1337.5,834.5C 1362.5,834.5 1387.5,834.5 1412.5,834.5C 1412.5,680.833 1412.5,527.167 1412.5,373.5C 1387.5,373.5 1362.5,373.5 1337.5,373.5C 1337.5,336.833 1337.5,300.167 1337.5,263.5 Z"/>
                            <motion.path variants={svg3} initial="start" animate = "end" stroke="white" strokeWidth="12" d="M 1937.5,458.5 C 2025.27,454.982 2095.77,487.649 2149,556.5C 2170.34,590.164 2184,626.831 2190,666.5C 2193.87,690.346 2195.7,714.346 2195.5,738.5C 2078.17,738.5 1960.83,738.5 1843.5,738.5C 1846.02,802.18 1878.36,840.68 1940.5,854C 1968.27,858.871 1994.61,854.538 2019.5,841C 2038.73,829.609 2056.4,816.109 2072.5,800.5C 2111.45,813.04 2150.45,825.373 2189.5,837.5C 2168.67,872.83 2140.34,900.664 2104.5,921C 2058.61,944.78 2009.77,955.947 1958,954.5C 1910.54,955.507 1865.04,946.674 1821.5,928C 1750.13,892.252 1708.29,834.752 1696,755.5C 1687.44,694.851 1697.44,637.517 1726,583.5C 1774.26,504.765 1844.76,463.099 1937.5,458.5 Z M 1932.5,559.5 C 1987.58,557.452 2023.08,582.785 2039,635.5C 2040.81,641.723 2041.98,648.056 2042.5,654.5C 1977.17,654.5 1911.83,654.5 1846.5,654.5C 1849.17,629.626 1858.01,607.293 1873,587.5C 1889.29,570.572 1909.13,561.239 1932.5,559.5 Z"/>
                            <motion.path variants={svg3} initial="start" animate = "end" stroke="white" strokeWidth="12" d="M 2491.5,458.5 C 2524.45,458.135 2557.12,460.968 2589.5,467C 2618.17,473.105 2644.5,484.438 2668.5,501C 2704.16,532.56 2721.66,572.394 2721,620.5C 2722.41,691.823 2722.91,763.157 2722.5,834.5C 2747.83,834.5 2773.17,834.5 2798.5,834.5C 2798.5,870.833 2798.5,907.167 2798.5,943.5C 2722.5,943.5 2646.5,943.5 2570.5,943.5C 2570.67,931.495 2570.5,919.495 2570,907.5C 2505.15,953.586 2435.32,962.753 2360.5,935C 2284.57,899.972 2256.07,841.472 2275,759.5C 2284.42,730.485 2300.92,706.318 2324.5,687C 2357.33,661.491 2394.67,647.158 2436.5,644C 2482.83,640.532 2527.33,648.032 2570,666.5C 2570.83,651.803 2570.49,637.136 2569,622.5C 2559.47,583.455 2534.64,561.622 2494.5,557C 2469.04,554.225 2445.04,558.892 2422.5,571C 2412.37,578.131 2402.54,585.631 2393,593.5C 2353.53,586.206 2314.03,579.039 2274.5,572C 2273.57,571.612 2272.91,570.945 2272.5,570C 2293.6,527.576 2326.26,497.576 2370.5,480C 2409.72,465.909 2450.06,458.742 2491.5,458.5 Z M 2482.5,734.5 C 2501.44,736.236 2519.44,741.402 2536.5,750C 2547.82,755.66 2558.82,761.827 2569.5,768.5C 2570.67,781.487 2570.83,794.487 2570,807.5C 2556.02,819.82 2541.18,830.987 2525.5,841C 2510.15,850.008 2493.65,855.174 2476,856.5C 2438.3,852.5 2418.14,831.5 2415.5,793.5C 2416.3,767.867 2428.63,750.367 2452.5,741C 2462.34,737.423 2472.34,735.256 2482.5,734.5 Z"/>
                            <motion.path variants={svg3} initial="start" animate = "end" stroke="white" strokeWidth="12" d="M 3603.5,458.5 C 3691.27,454.982 3761.77,487.649 3815,556.5C 3838.84,594.01 3853.17,635.01 3858,679.5C 3860.49,699.09 3861.66,718.756 3861.5,738.5C 3744.17,738.5 3626.83,738.5 3509.5,738.5C 3512.02,802.18 3544.36,840.68 3606.5,854C 3634.27,858.871 3660.61,854.538 3685.5,841C 3704.73,829.609 3722.4,816.109 3738.5,800.5C 3777.45,813.04 3816.45,825.373 3855.5,837.5C 3827.23,884.515 3787.23,917.682 3735.5,937C 3687.34,952.869 3638.01,958.202 3587.5,953C 3537.94,949.624 3492.61,934.291 3451.5,907C 3400.8,869.136 3370.97,818.636 3362,755.5C 3353.44,694.851 3363.44,637.517 3392,583.5C 3440.26,504.765 3510.76,463.099 3603.5,458.5 Z M 3598.5,559.5 C 3653.58,557.452 3689.08,582.785 3705,635.5C 3706.88,641.714 3708.04,648.048 3708.5,654.5C 3643.17,654.5 3577.83,654.5 3512.5,654.5C 3515.17,629.626 3524.01,607.293 3539,587.5C 3555.47,570.959 3575.3,561.625 3598.5,559.5 Z"/>
                            <motion.path variants={svg3} initial="start" animate = "end" stroke="white" strokeWidth="12" d="M 1010.5,458.5 C 1097.73,454.878 1167.9,487.212 1221,555.5C 1240.43,584.766 1253.43,616.766 1260,651.5C 1265.74,680.217 1268.57,709.217 1268.5,738.5C 1151.17,738.5 1033.83,738.5 916.5,738.5C 917.237,795.03 944.237,832.196 997.5,850C 1029.51,859.88 1060.51,857.213 1090.5,842C 1110.68,830.665 1129.01,816.831 1145.5,800.5C 1184.64,812.77 1223.64,825.437 1262.5,838.5C 1226.22,896.232 1174.55,932.398 1107.5,947C 1045.16,959.223 983.495,956.556 922.5,939C 848.812,913.979 799.978,864.479 776,790.5C 764.494,744.074 763.494,697.407 773,650.5C 792.823,571.349 839.656,514.516 913.5,480C 944.72,467.258 977.054,460.092 1010.5,458.5 Z M 1004.5,559.5 C 1057.16,556.731 1092.33,580.064 1110,629.5C 1112.63,637.671 1114.46,646.004 1115.5,654.5C 1050.17,654.5 984.833,654.5 919.5,654.5C 921.879,624.914 933.546,599.747 954.5,579C 969.419,567.863 986.085,561.363 1004.5,559.5 Z"/>
                            <motion.path variants={svg3} initial="start" animate = "end" stroke="white" strokeWidth="12" d="M 3005.5,463.5 C 3041.07,461.506 3076.07,465.006 3110.5,474C 3122.39,477.184 3133.89,481.351 3145,486.5C 3145.19,481.25 3145.69,476.083 3146.5,471C 3182.5,470.5 3218.5,470.333 3254.5,470.5C 3254.5,516.5 3254.5,562.5 3254.5,608.5C 3218.17,608.5 3181.83,608.5 3145.5,608.5C 3141.16,593.99 3132.49,582.823 3119.5,575C 3095.92,563.249 3070.92,558.083 3044.5,559.5C 3028.71,558.637 3013.38,560.803 2998.5,566C 2981.46,573.588 2975.29,586.422 2980,604.5C 2986.98,613.418 2996.15,618.918 3007.5,621C 3045.73,629.204 3084.06,636.871 3122.5,644C 3152.41,649.725 3181.41,658.392 3209.5,670C 3264.56,699.941 3290.06,746.441 3286,809.5C 3280.3,868.415 3250.8,910.582 3197.5,936C 3153.98,952.899 3108.98,958.565 3062.5,953C 3039.13,951.326 3017.13,944.993 2996.5,934C 2991.04,930.213 2985.88,926.046 2981,921.5C 2980.5,928.826 2980.33,936.159 2980.5,943.5C 2943.5,943.5 2906.5,943.5 2869.5,943.5C 2869.5,889.167 2869.5,834.833 2869.5,780.5C 2906.5,780.333 2943.5,780.5 2980.5,781C 2982.5,802.999 2992.5,820.332 3010.5,833C 3035.61,848.444 3062.94,855.11 3092.5,853C 3111.26,852.647 3128.59,847.647 3144.5,838C 3161.09,825.805 3165.26,810.305 3157,791.5C 3149.93,783.046 3141.1,777.213 3130.5,774C 3122.21,771.511 3113.88,769.178 3105.5,767C 3070.26,761.183 3035.26,754.183 3000.5,746C 2969.1,738.131 2939.44,726.131 2911.5,710C 2857.03,671.606 2839.87,620.439 2860,556.5C 2876.96,519.88 2904.12,493.713 2941.5,478C 2962.26,470.048 2983.59,465.215 3005.5,463.5 Z"/>
                        </g>
                    </motion.svg>
                    <Svg xmlns="http://www.w3.org/2000/svg" version="1.1" width= "16vw" viewBox="0 0 260 310">
                        <g transform="scale(0.1, 0.1)" fill-rule="evenodd">
                            <motion.path variants={svg4} initial="start" animate = "end" d="M 1166.5,-0.5 C 1205.83,-0.5 1245.17,-0.5 1284.5,-0.5C 1438.76,8.89108 1584.43,48.3911 1721.5,118C 1817.04,167.913 1899.54,234.413 1969,317.5C 2064.48,439.684 2111.65,579.018 2110.5,735.5C 2109.99,815.226 2099.49,893.559 2079,970.5C 2059.6,1032.06 2033.27,1090.39 2000,1145.5C 1943.46,1236.43 1875.3,1318.26 1795.5,1391C 1725.79,1454.74 1650.45,1510.74 1569.5,1559C 1617.2,1599.03 1662.03,1642.2 1704,1688.5C 1951.61,1963.04 2112.94,2282.38 2188,2646.5C 2213.55,2778.23 2226.05,2911.23 2225.5,3045.5C 1998.83,3045.5 1772.17,3045.5 1545.5,3045.5C 1534.1,2867.56 1510.93,2691.22 1476,2516.5C 1455.96,2419.58 1427.62,2325.24 1391,2233.5C 1374.21,2194.26 1354.55,2156.59 1332,2120.5C 1308.83,2084.38 1280.66,2052.55 1247.5,2025C 1215.18,2000.85 1179.18,1984.18 1139.5,1975C 1091.48,1961.46 1042.48,1954.29 992.5,1953.5C 937.385,1952.79 885.051,1964.29 835.5,1988C 770.345,2023.17 726.178,2076 703,2146.5C 690.338,2190.89 684.505,2236.23 685.5,2282.5C 686.641,2345.96 692.474,2408.96 703,2471.5C 723.24,2583.41 751.573,2693.08 788,2800.5C 816.363,2884.39 848.197,2966.72 883.5,3047.5C 668.833,3047.5 454.167,3047.5 239.5,3047.5C 203.902,2979.86 173.402,2909.86 148,2837.5C 73.3866,2622.01 27.0533,2400.34 9,2172.5C 4.91877,2121.07 1.75211,2069.73 -0.5,2018.5C -0.5,1949.83 -0.5,1881.17 -0.5,1812.5C 11.0559,1518.97 56.8893,1230.97 137,948.5C 177.449,823.496 226.783,702.496 285,585.5C 325.25,506.332 372.583,431.665 427,361.5C 536.673,222.74 675.507,125.574 843.5,70C 917.945,45.8555 993.612,26.1889 1070.5,11C 1102.44,5.50997 1134.44,1.67663 1166.5,-0.5 Z M 1303.5,458.5 C 1364.97,458.52 1423.97,470.354 1480.5,494C 1519.93,512.836 1553.1,539.669 1580,574.5C 1642.98,661.26 1678.65,758.594 1687,866.5C 1691.79,929.443 1682.46,990.109 1659,1048.5C 1649.31,1069.55 1637.81,1089.55 1624.5,1108.5C 1594.99,1140.29 1558.66,1159.13 1515.5,1165C 1470.33,1170.38 1425.66,1167.71 1381.5,1157C 1310,1138.85 1242.67,1111.18 1179.5,1074C 1101.81,1029.01 1032.98,972.839 973,905.5C 941.453,869.411 916.786,829.078 899,784.5C 885.539,747.239 884.206,709.572 895,671.5C 902.041,654.41 911.374,638.744 923,624.5C 1014.14,528.515 1125.98,474.015 1258.5,461C 1273.67,460.362 1288.67,459.529 1303.5,458.5 Z"/>
                            <motion.path variants={svg5} initial="start" animate = "end" d="M 2547.5,1516.5 C 2547.5,1557.17 2547.5,1597.83 2547.5,1638.5C 2545.95,1654.68 2544.45,1671.01 2543,1687.5C 2541.36,1701.29 2539.19,1714.95 2536.5,1728.5C 2449.03,1640.81 2353.03,1564.31 2248.5,1499C 2152.2,1440.7 2049.53,1396.2 1940.5,1365.5C 1992.04,1306.13 2037.54,1242.46 2077,1174.5C 2114.86,1106.36 2143.19,1034.03 2162,957.5C 2175.67,897.177 2185.33,836.177 2191,774.5C 2191.56,773.978 2192.23,773.645 2193,773.5C 2215.84,781.451 2237.01,792.617 2256.5,807C 2296.79,838.125 2331.29,874.625 2360,916.5C 2414.55,999.275 2456.55,1088.28 2486,1183.5C 2519.74,1292.13 2540.24,1403.13 2547.5,1516.5 Z"/>
                        </g>
                    </Svg>
                </Svgs>
            </LogoPlay>
            <BoxComplete />
            <BoxComplete />
            <BoxOne>
                <BoxComplete>
                    <motion.img style = {{scale: scaleOne}} src = "/release_web/img/img1.png" />
                </BoxComplete>
                <BoxComplete>
                    <motion.img style = {{scale: scaleOne}} src = "/release_web/img/img2.png" />
                </BoxComplete>
                <BoxComplete />
                <BoxComplete />
                <BoxComplete />
            </BoxOne>
            <BoxComplete />
            <BoxComplete />
            <BoxTwo>
                <BoxComplete>
                    <motion.img style = {{scale: scaleTwo}} src = "/release_web/img/books_img.png" />
                </BoxComplete>
                <BoxComplete />
            </BoxTwo>
            <BoxComplete />
            <Footer>
                <img src = "/release_web/img/footer_release.png" />
            </Footer>
        </Wrapper>
    );
}

export default Home;