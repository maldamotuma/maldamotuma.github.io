import React from 'react';
// import Slider from 'react-slick';
import { settings } from './settings';
import reactIcon from '../../../assets/svg/react.svg';
import NextIcon from '../../../assets/svg/Nextjs.svg';
import GatsbyIcon from '../../../assets/svg/Gatsbyjs.svg';
import muiIcon from '../../../assets/svg/mui.svg';
import ChakraIcon from '../../../assets/svg/Chakra.svg';
import reduxIcon from '../../../assets/svg/redux.svg';
import jsIcon from '../../../assets/svg/js.svg';
import Skillcardnew from '../Skillcardnew';
import { skills } from './skills';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import NavButtons from './NavButtons';

const Frontend = () => {
    const skillCardContents = skills.frontEnd
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
                900: {
                    slidesPerView: 3,
                },
                1000: {
                    slidesPerView: 4,
                },
                600: {
                    slidesPerView: 2,
                },
            }}
            modules={[Navigation]}
            navigation={{
                prevEl: ".swiper-button-previous",
                nextEl: ".swiper-next",
            }}
        >
            <SwiperSlide>
                <Skillcardnew title={"React Js"} backIcon={reactIcon} mainColor={"#61DAFB"} textShadow={"#555"} pro_level={"Expert"} card_content={skillCardContents.reactjs} />
            </SwiperSlide>
            <SwiperSlide>
                <Skillcardnew title={"Next Js"} backIcon={NextIcon} mainColor={"#000000"} textShadow={"#fff"} pro_level={"Expert"} card_content={skillCardContents.nextjs} />
            </SwiperSlide>
            <SwiperSlide>
                <Skillcardnew title={"Gatsby Js"} backIcon={GatsbyIcon} mainColor={"#663795"} textShadow={"#fff"} pro_level={"Expert"} card_content={skillCardContents.gatsbyjs} />
            </SwiperSlide>
            <SwiperSlide>
                <Skillcardnew title={"MUI"} backIcon={muiIcon} mainColor={"#0081CB"} textShadow={"#fff"} pro_level={"Expert"} card_content={skillCardContents.mui} />
            </SwiperSlide>
            <SwiperSlide>
                <Skillcardnew title={"Chakra UI"} backIcon={ChakraIcon} mainColor={"#63CACB"} textShadow={"#555"} pro_level={"Advanced"} card_content={skillCardContents.chakraui} />
            </SwiperSlide>
            <SwiperSlide>
                <Skillcardnew title={"Redux"} backIcon={reduxIcon} mainColor={"#764ABC"} textShadow={"#fff"} pro_level={"Expert"} card_content={skillCardContents.redux} />
            </SwiperSlide>
            <SwiperSlide>
                <Skillcardnew title={"Javascript"} backIcon={jsIcon} mainColor={"#E9CA32"} textShadow={"#555"} pro_level={"Expert"} card_content={skillCardContents.javascript} />
            </SwiperSlide>
            <NavButtons />
        </Swiper>
    )
}

export default Frontend