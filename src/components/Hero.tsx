import { Celebration, Email, Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { alpha, Box, Button, Container, IconButton, Paper, Stack, Typography } from "@mui/material";
import { blue, deepOrange, lightBlue, lightGreen, pink } from "@mui/material/colors";
import { FunctionComponent } from "react";
import heroImage from "../images/hero-img.png";

interface HeroProps {

}

const Hero: FunctionComponent<HeroProps> = () => {
    return (
        <Box
            sx={{
                bgcolor: "#313131"
            }}
        >
            <Container
                // maxWidth={"xl"}
                sx={{
                    position: "relative",
                    pt: 8,
                    pb: 0,
                    overflow: "hidden"
                }}
            >
                <Stack
                    direction={"row"}
                    flexWrap={"wrap"}
                    alignItems="center"
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        pl: 5,
                        py: 5,
                        boxSizing: "border-box",
                        // background: "radial-gradient(#31313100 40%, #313131 10%)",
                        "&::before": {
                            content: "''",
                            width: 5,
                            height: 350,
                            position: "absolute",
                            display: "inline-block",
                            top: "50%",
                            left: 0,
                            transform: "translateY(-50%)",
                            bgcolor: lightBlue[100],
                            borderRadius: 5
                        }
                    }}
                >
                    <Box
                        sx={{
                            width: {
                                xs: "100%",
                                tablet: "75%",
                                laptop: "50%"
                            },
                            pr: {
                                laptop: 3
                            },
                            boxSizing: "border-box"
                        }}
                    >
                        <Typography
                            fontSize={{
                                xs: 16,
                                sm: 20
                            }}
                            fontWeight={600}
                            color={pink[500]}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                "&::before": {
                                    content: "''",
                                    width: {
                                        xs: 50,
                                        sm: 100
                                    },
                                    height: 3,
                                    bgcolor: pink[500],
                                    display: "inline-block",
                                    borderRadius: 2
                                }
                            }}
                        >
                            Hi I am Malda Motuma,
                        </Typography>
                        <Typography
                            fontSize={{
                                xs: 30,
                                sm: 40
                            }}
                            fontWeight={700}
                            color={blue[400]}
                            lineHeight={"1.2em"}
                        >
                            <strong style={{
                                color: lightBlue[50]
                            }}>Full Stack</strong> Developer: Expertise in <strong style={{
                                color: lightBlue[50]
                            }}>React-Laravel</strong> and <strong style={{
                                color: lightBlue[50]
                            }}>MERN Stack.</strong>
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            color={"#adadad"}
                            fontSize={{
                                xs: 12,
                                sm: 14
                            }}
                        >
                            {/* Looking for a full-stack developer who can build responsive and scalable web applications using React-Laravel and MERN Stack? Look no further. With years of experience in both front-end and back-end development, I have the expertise needed to deliver results that exceed your expectations.
                             */}
                            Responsive. Scalable. Expertly crafted. As a full-stack developer with proficiency in React-Laravel and MERN Stack, I offer end-to-end web development solutions that meet your unique needs and deliver results beyond your expectations.
                        </Typography>
                        <Box
                            sx={{
                                mt: 1.5
                            }}
                        >
                            <Button
                                startIcon={<Celebration />}
                                sx={{
                                    bgcolor: "#0099ff",
                                    color: "#ffffff",
                                    minWidth: 150
                                }}
                            >
                                Hire Me
                            </Button>
                            <Box
                                sx={{
                                    mt: 2
                                }}
                            >
                                <IconButton
                                    sx={{
                                        color: "#0077B5"
                                    }}
                                >
                                    <LinkedIn />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        color: "#F6F8FA"
                                    }}
                                >
                                    <GitHub />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        color: "#1877f2"
                                    }}
                                >
                                    <Facebook />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        color: "#E4405F"
                                    }}
                                >
                                    <Instagram />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        color: lightGreen[50]
                                    }}
                                >
                                    <Email />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: "50%",
                            p: 0,
                            overflow: "hidden",
                            textAlign: "end",
                            display: {
                                xs: "none",
                                laptop: "inline-block"
                            }
                        }}
                    >
                        <Box
                            component={"img"}
                            src={heroImage}
                            // src={"https://png.pngitem.com/pimgs/s/17-170452_taxi-hire-website-design-web-design-illustration-png.png"}
                            sx={{
                                // width: "100%",
                                maxHeight: 450,
                                // aspectRatio: "1/1",
                                objectFit: "contain",
                            }}
                        />
                    </Box>
                </Stack>
                <Box
                    sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        "&::before": {
                            content: "''",
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            // bgcolor: alpha("#313131", .75),
                            // backdropFilter: "blur(14px)"
                            background: `radial-gradient(${alpha("#313131", .75)} 15%, #313131 70%)`
                        }
                    }}
                >
                    <video
                        src={"/merged.mp4"}
                        width={"100%"}
                        height={"100%"}
                        style={{
                            display: "block",
                            objectFit: "cover"
                        }}
                        autoPlay
                        loop
                        muted
                    />
                </Box>
                {/* <Paper
                    elevation={0}
                    sx={{
                        height: 100,
                        bgcolor: "#ffffff",
                        width: "100%",
                        position: "relative",
                        zIndex: 3,
                        borderRadius: "10px 10px 0 0",
                        mb: "-50px",
                        mt: 2
                    }}
                >

                </Paper> */}
            </Container>
        </Box>
    );
}

export default Hero;