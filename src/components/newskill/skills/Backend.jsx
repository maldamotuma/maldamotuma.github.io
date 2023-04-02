import React from 'react';
// import Slider from 'react-slick';
import { settings } from './settings';
import LaravelIcon from '../../../assets/svg/Laravel.svg';
import nodeIcon from '../../../assets/svg/nodejs.svg';
import expressIcon from '../../../assets/svg/expressjs.svg';
import socketioIcon from '../../../assets/svg/socketio.svg';
import mongodbIcon from '../../../assets/svg/mongodb.svg';
import sqldbIcon from '../../../assets/svg/sqldb.svg';
import Skillcardnew from '../Skillcardnew';
import { skills } from './skills';
import { Box, Fab } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import NavButtons from './NavButtons';

const BackEnd = () => {
    const skillCardContents = skills.backEnd

    return (
        <Box>
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
                    <Skillcardnew title={"Laravel"} backIcon={LaravelIcon} mainColor={"#FF291A"} textShadow={"#fff"} pro_level={"Expert"} card_content={skillCardContents.laravel} />
                </SwiperSlide>
                <SwiperSlide>
                    <Skillcardnew title={"Mongo DB"} backIcon={mongodbIcon} mainColor={"#13AA52"} textShadow={"#111"} pro_level={"Intermediate"} card_content={skillCardContents.mongodb} />
                </SwiperSlide>
                <SwiperSlide>
                    <Skillcardnew title={"Express Js"} backIcon={expressIcon} mainColor={"#000000"} textShadow={"#fff"} pro_level={"Intermediate"} card_content={skillCardContents.expressjs} />
                </SwiperSlide>
                <SwiperSlide>
                    <Skillcardnew title={"Node Js"} backIcon={nodeIcon} mainColor={"#6DA55F"} textShadow={"#222"} pro_level={"Intermediate"} card_content={skillCardContents.nodejs} />
                </SwiperSlide>
                <SwiperSlide>
                    <Skillcardnew title={"Socket.io"} backIcon={socketioIcon} mainColor={"#000000"} textShadow={"#fff"} pro_level={"Intermediate"} card_content={skillCardContents.socketio} />
                </SwiperSlide>
                <SwiperSlide>
                    <Skillcardnew title={"SQL DB"} backIcon={sqldbIcon} mainColor={"#0072C6"} textShadow={"#fff"} pro_level={"Expert"} card_content={skillCardContents.sqldb} />
                </SwiperSlide>
                <NavButtons />
            </Swiper>
        </Box>
    )
}

export default BackEnd