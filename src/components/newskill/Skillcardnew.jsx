import { Card, Grow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

const Skillcardnew = ({ title, backIcon, mainColor, textShadow, pro_level, card_content }) => {
    return (
        <Card elevation={0} sx={{
            width: "100%",
            bgcolor: '#0d2845',
            position: 'relative',
            zIndex: 1,
            my: 2,
            borderRadius: '20px',
            display: 'inline-block',
        }}>
            <Box
                component={"img"}
                alt={""}
                src={backIcon}
                loading={"lazy"}
                width={{ xl: "30%", lg: '25%', md: 0 }}
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0
                }}
            ></Box>
            <Box
                sx={{
                    width: '100px',
                    height: '100px',
                    bgcolor: mainColor,
                    position: 'absolute',
                    right: '-50px',
                    bottom: 0,
                    borderRadius: '50%'
                }}
            ></Box>
            <Box sx={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '20px',
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    pr: 2,
                    pt: { xl: 2, lg: 1 },
                }}>
                    <Box
                        sx={{
                            height: '5px',
                            bgcolor: 'transparent',
                            flex: 1,
                        }}
                    ></Box>
                    <Typography variant={"h3"} component={"h3"} fontWeight={"bold"} color={mainColor} align={"center"} fontSize={{ xl: 40, tablet: 20, }} sx={{
                        textShadow: `1px 1px 1px ${textShadow}`
                    }}>{title}</Typography>
                </Box>
                <Box sx={{ py: { xl: 2, lg: 1 }, backdropFilter: 'blur(20px)', mx: 1, borderRadius: '20px', boxShadow: `0 0 1px  0 #ffffffaf` }}>
                    {
                        card_content && card_content.map(content => (
                            <Box
                                sx={{
                                    display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1, mx: 2, my: 1,
                                    borderRadius: 1.5,
                                    transition: '.2s all ease',
                                    '&:hover': {
                                        backgroundColor: mainColor,
                                    },
                                }}
                            >
                                <ArrowRightAltRoundedIcon sx={{ color: "#fff" }} />
                                <Typography variant={"body1"} align={"center"} component={"p"} fontSize={{ xl: 20, lg: 15 }} color={"#fff"} sx={{ py: 0, my: 0 }} noWrap>
                                    {content}
                                </Typography>
                            </Box>
                        ))
                    }
                </Box>
                <Box variant={"contained"} sx={{
                    width: '80%',
                    mx: 'auto !important',
                    display: 'flex',
                    my: 2.5,
                    bgcolor: mainColor,
                    py: 1,
                    pl: 3,
                    fontWeight: 'bold',
                    color: '#fff',
                    borderTopLeftRadius: '20px'
                }}>
                    {pro_level}
                </Box>
            </Box>
        </Card>
    )
};

export default Skillcardnew;
