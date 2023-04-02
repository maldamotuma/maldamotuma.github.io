import { Celebration, Email, Facebook, GitHub, Handshake, Instagram, LinkedIn, Looks3, Looks4, Looks5, LooksOne, LooksTwo } from "@mui/icons-material";
import { alpha, Box, Button, Container, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { deepOrange, lightBlue, lightGreen, pink } from "@mui/material/colors";
import { FunctionComponent } from "react";
import myphoto from "../images/my-abou-us.png";

interface AboutSectionProps {

}

const AboutSection: FunctionComponent<AboutSectionProps> = () => {
    return (
        <Box
            sx={{
                bgcolor: "#313131",
                py: 5
            }}
        >
            <Container>
                <Stack
                    direction={"row"}
                    flexWrap={"wrap"}
                    alignItems={"center"}
                    sx={{
                        position: "relative"
                    }}
                >
                    <Box
                        sx={{
                            width: "50%",
                            position: "relative",
                            zIndex: 1,
                            display: {
                                xs: "none",
                                laptop: "inline-block"
                            }
                        }}
                    >
                        <Box
                            component={"img"}
                            src={myphoto}
                            alt={"About Malda Motuma"}
                            sx={{
                                maxHeight: 600,
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: {
                                xs: "100%",
                                tablet: "calc(100% - 20px)",
                                laptop: "50%"
                            },
                            position: "relative",
                            zIndex: 1
                        }}
                    >
                        <Typography
                            fontSize={14}
                            fontWeight={600}
                            color={deepOrange[400]}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                "&::before": {
                                    content: "''",
                                    width: 100,
                                    height: 2,
                                    bgcolor: deepOrange[400],
                                    display: "inline-block",
                                    borderRadius: 2
                                }
                            }}
                        >
                            About Me
                        </Typography>
                        <Typography
                            fontSize={30}
                            fontWeight={700}
                            color={"info.light"}
                            lineHeight={"1.2em"}
                        >
                            Building Visually Stunning and Scalable Applications: Meet Malda Motuma
                        </Typography>
                        <List
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                                mt: 2,
                                color: "#ffffff"
                            }}
                        >
                            <ListItem
                                sx={{
                                    bgcolor: "#2e2e2e",
                                    border: 1,
                                    borderRadius: 3,
                                    borderColor: "#515151",
                                }}
                            >
                                <ListItemIcon>
                                    <LooksOne sx={{ color: "#ffffff" }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <>
                                            Hello, I'm a fullstack developer with expertise in React-Laravel and MERN Stack. I hold a BSc degree in Computer Science and Engineering and am currently pursuing an MSC degree in Artificial Intelligence.
                                        </>
                                    }
                                />
                            </ListItem>
                            <ListItem
                                sx={{
                                    bgcolor: "#2e2e2e",
                                    border: 1,
                                    borderRadius: 3,
                                    borderColor: "#515151",
                                    ml: {
                                        tablet: "20px",
                                        laptop: "-100px"
                                    }
                                }}
                            >
                                <ListItemIcon>
                                    <LooksTwo sx={{ color: "#ffffff" }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <>
                                            Since mid-2018, I've been developing web applications of varying complexities, from small to large-scale projects. I'm truly passionate about creating applications that are not only functional but also responsive, visually appealing, and scalable.
                                        </>
                                    }
                                />
                            </ListItem>
                            <ListItem
                                sx={{
                                    bgcolor: "#2e2e2e",
                                    border: 1,
                                    borderRadius: 3,
                                    borderColor: "#515151",
                                }}
                            >
                                <ListItemIcon>
                                    <Looks3 sx={{ color: "#ffffff" }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <>
                                            I believe that a great application should not only be user-friendly but also visually stunning. That's why I pay special attention to the design aspect of development, ensuring that every application I build is both aesthetically pleasing and functional.
                                        </>
                                    }
                                />
                            </ListItem>
                            <ListItem
                                sx={{
                                    bgcolor: "#2e2e2e",
                                    border: 1,
                                    borderRadius: 3,
                                    borderColor: "#515151",
                                    ml: {
                                        tablet: "20px",
                                        laptop: "-100px"
                                    }
                                }}
                            >
                                <ListItemIcon>
                                    <Looks4 sx={{ color: "#ffffff" }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <>
                                            In addition, scalability is a critical component of any successful application, and I'm committed to building applications that can grow and evolve with my clients' needs.
                                        </>
                                    }
                                />
                            </ListItem>
                            <ListItem
                                sx={{
                                    border: 1,
                                    borderRadius: 3,
                                    borderColor: "#515151"
                                }}
                            >
                                <ListItemIcon>
                                    <Looks5 sx={{ color: "#ffffff" }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <>
                                            If you're looking for a dedicated and skilled developer who can bring your ideas to life while delivering responsive, visually appealing, and scalable applications, I'm here to help. Let's work together to build something amazing!
                                        </>
                                    }
                                />
                            </ListItem>
                        </List>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                mt: 2
                            }}
                        >
                            <Button
                                startIcon={<Celebration />}
                                variant={"contained"}
                                sx={{
                                    // bgcolor: "#0099ff",
                                    // color: "#ffffff",
                                    minWidth: 150
                                }}
                            >
                                Hire Me
                            </Button>
                            <Box
                                sx={{
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
                                        // color: "#F6F8FA"
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
                                        color: lightGreen[900]
                                    }}
                                >
                                    <Email />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                    <Typography
                        fontSize={{
                            xs: 100,
                            tablet: 250
                        }}
                        fontWeight={900}
                        color={alpha("#999999", .15)}
                        lineHeight={"1em"}
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: {
                                laptop: "30%"
                            }
                        }}
                    >
                        BIO
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
}

export default AboutSection;