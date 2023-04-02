import React from 'react';
// import Slider from 'react-slick';
import { settings } from './settings';
import FigmaIcon from '../../../assets/svg/Figma.svg';
import Adobe_XDIcon from '../../../assets/svg/Adobe_XD.svg';
import Adobe_IllustratorIcon from '../../../assets/svg/Adobe_Illustrator.svg';
import Adobe_PhotoshopIcon from '../../../assets/svg/Adobe_Photoshop.svg';
import Skillcardnew from '../Skillcardnew';
import { skills } from './skills';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import NavButtons from './NavButtons';

const Tools = () => {
    const skillCardContents = skills.tools

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
                <Skillcardnew title={"Figma"} backIcon={FigmaIcon} mainColor={"#A259FF"} textShadow={"#fff"} pro_level={"Pro"} card_content={skillCardContents.figma} />
            </SwiperSlide>
            <SwiperSlide>
                <Skillcardnew title={"Adobe XD"} backIcon={Adobe_XDIcon} mainColor={"#470137"} textShadow={"#FF61F6"} pro_level={"Pro"} card_content={skillCardContents.AdobeXD} />
            </SwiperSlide>
            <SwiperSlide>
                <Skillcardnew title={"Illustrator"} backIcon={Adobe_IllustratorIcon} mainColor={"#330000"} textShadow={"#FF9A00"} pro_level={"Basic"} card_content={skillCardContents.illustrator} />
            </SwiperSlide>
            <SwiperSlide>
                <Skillcardnew title={"Photoshop"} backIcon={Adobe_PhotoshopIcon} mainColor={"#001E36"} textShadow={"#31A8FF"} pro_level={"Intermideate"} card_content={skillCardContents.photoshop} />
            </SwiperSlide>
            <NavButtons />
        </Swiper>
    )
}

export default Tools