import { AccountBox, Build, ContactMail, Download, Feedback, Home, Info } from "@mui/icons-material";
import { alpha, AppBar, Avatar, Box, Button, CardHeader, Container, Stack, Toolbar, useScrollTrigger } from "@mui/material";
import { FunctionComponent } from "react";
import logo from "../images/mylogo.webp";
import hs from "../images/head_shoot.jpg";
import MenuDrawer from "./MenuDrawer";

export const links = [
    {
        title: "Home",
        icon: <Home />
    },
    {
        title: "About",
        icon: <Info />
    },
    {
        title: "Skills",
        icon: <Build />
    },
    {
        title: "Portofolio",
        icon: <AccountBox />
    },
    {
        title: "Feedback",
        icon: <Feedback />
    },
    {
        title: "Contact",
        icon: <ContactMail />
    },
]
interface MaldaAppbarProps {
    inView: { bgcolor: string; color: string } | null
}

const MaldaAppbar: FunctionComponent<MaldaAppbarProps> = (props) => {
    const { inView } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        // threshold: 25,
    });

    return (
        <>
            <AppBar
                elevation={trigger ? 1 : 0}
                sx={{
                    bgcolor: alpha(inView?.bgcolor ? inView.bgcolor : "#313131", trigger ? .5 : 0),
                    transition: ".2s background-color linear",
                    ...(trigger && {
                        backdropFilter: "blur(14px)"
                    })
                }}
            >
                <Container
                    maxWidth={"xl"}
                >
                    <Toolbar>
                        {/* <Box
                            component={"img"}
                            src={logo}
                            alt={"Malda Motuma"}
                            sx={{
                                width: 150,
                                px: 1,
                                py: .5,
                                bgcolor: "#1C1439",
                                borderRadius: 2
                            }}
                        /> */}
                        <CardHeader
                            avatar={<Avatar src={hs} />}
                            title={"Malda Motuma"}
                            subheader={"Full-Stack Software Developer"}
                            sx={{
                                p: 0,
                                color: inView ? inView.color : "#ffffff"
                            }}
                            titleTypographyProps={{
                                fontWeight: 700
                            }}
                            subheaderTypographyProps={{
                                color: alpha(inView ? inView.color : "#ffffff", .8)
                            }}
                        />
                        <Box
                            sx={{
                                flexGrow: 1
                            }}
                        />
                        <Stack
                            direction={"row"}
                            spacing={1}
                            sx={{
                                display: {
                                    xs: "none",
                                    laptop: "flex"
                                }
                            }}
                        >
                            {
                                links.map(lnk => (
                                    <Button
                                        key={lnk.title}
                                        size={"small"}
                                        sx={{
                                            color: inView?.color ? inView.color : "#ffffff",
                                            transition: ".2s color linear",
                                        }}
                                    >
                                        {lnk.title}
                                    </Button>
                                ))
                            }
                        </Stack>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: "#0099ff",
                                color: "#ffffff",
                                ml: 2,
                                mr: {
                                    xs: 2,
                                    laptop: 0
                                },
                                display: {
                                    xs: "none",
                                    sm: "flex"
                                }
                            }}
                            startIcon={<Download />}
                            disableElevation
                        >
                            Get My Resume
                        </Button>
                        <MenuDrawer />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default MaldaAppbar;