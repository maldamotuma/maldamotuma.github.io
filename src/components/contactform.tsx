import { AttachMoney, Close, Group, Phone } from "@mui/icons-material";
import { alpha, Avatar, Backdrop, Box, Button, Card, CardContent, CardHeader, Checkbox, Collapse, DialogTitle, Divider, Fab, FormControl, FormControlLabel, FormLabel, IconButton, Paper, Stack, Theme, ToggleButton, ToggleButtonGroup, Typography, useMediaQuery, useTheme } from "@mui/material";
import { deepOrange, indigo, red } from "@mui/material/colors";
import { MouseEvent, useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import hs from "../images/head_shoot.jpg";
import arrow from "../images/arrow.svg";
import mask from "../images/mask_vector.png";
import { RedditTextField } from "./ReditTextField";
import "../components/anim.css";


export const useContactForm = () => {
    const [open, setOpen] = useState(false);
    const [delivery, setDelivery] = useState("");
    const theme = useTheme();
    const inRef = useRef<any>();
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("tablet"));

    const openForm = () => {
        setOpen(true);
        inRef.current?.focus();
    }

    const closeForm = () => {
        setOpen(false);
    }

    const handleDeliveryChange = (
        event: MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setDelivery(newAlignment);
    };

    const contactForm = (outlined?: boolean) => (
        <Card
            sx={{
                width: "100%",
                maxWidth: 450,
            }}
        >
            <DialogTitle
                sx={{
                    color: "#ffffff",
                    bgcolor: indigo[900],
                }}
            >Request A Quote</DialogTitle>
            <SimpleBar
                style={{
                    height: "80vh",
                    width: "calc(100vw - 35px)",
                    maxWidth: "450px",
                }}
            >
                <Divider />
                <CardHeader
                    avatar={<Avatar
                        src={hs}
                        alt={"Malda Motuma"}
                        sx={{
                            width: 50,
                            height: 50,
                        }}
                    />}
                    title={"Malda Motuma"}
                    subheader={"Hi, please provide your request details below and I’ll get back to you."}
                />
                <CardContent>
                    <Stack
                        spacing={1}
                    >
                        <RedditTextField
                            placeholder="here..."
                            fullWidth
                            label={"Your Name"}
                            autoFocus
                            variant="filled"
                            ref={inRef}
                        />
                        <RedditTextField
                            placeholder="here..."
                            fullWidth
                            label={"Your Email"}
                            autoFocus
                            variant="filled"
                        />
                        <RedditTextField
                            placeholder="here..."
                            fullWidth
                            label={"Describe the service you're looking to purchase - please be as detailed as possible:"}
                            autoFocus
                            variant="filled"
                            multiline
                            rows={3}
                        />
                        <FormControl>
                            <FormLabel>
                                Once you place your order, when would you like your service delivered?
                            </FormLabel>
                            <ToggleButtonGroup
                                color="primary"
                                value={delivery}
                                exclusive
                                onChange={handleDeliveryChange}
                                aria-label="Delivery"
                                size="small"
                            >
                                <ToggleButton value="24hr">24 Hours</ToggleButton>
                                <ToggleButton value="3 days">3 days</ToggleButton>
                                <ToggleButton value="7 days">7 days</ToggleButton>
                            </ToggleButtonGroup>
                        </FormControl>
                        <FormControlLabel
                            label={"Try For Free (One Page 3 section website)"}
                            control={<Checkbox />}
                        />
                        <RedditTextField
                            placeholder="here..."
                            fullWidth
                            label={"What is your budget for this service?"}
                            autoFocus
                            variant="filled"
                            InputProps={{
                                endAdornment: <AttachMoney sx={{ color: "text.secondary" }} />
                            }}
                        />
                        <Box
                            sx={{
                                pt: 3
                            }}
                        >
                            <Button
                                variant={"contained"}
                            >
                                Submit Request
                            </Button>
                        </Box>
                    </Stack>
                </CardContent>
            </SimpleBar>
        </Card>
    );

    const ContactFAB = (
        open ?
            <></>
            :
            <>
                <Fab
                    variant="extended"
                    sx={{
                        position: "fixed",
                        right: "25px",
                        bottom: isMobile ? "100px" : "25px",
                        color: indigo[900],
                        gap: 1.5,
                    }}
                    onClick={openForm}
                    className="pulse-anim"
                >
                    <Group />
                    20% OFF
                </Fab>
                <Fab
                    variant="extended"
                    sx={{
                        position: "fixed",
                        right: isMobile ? "25px" : "180px",
                        bottom: "25px",
                        bgcolor: indigo[900],
                        color: "#ffffff",
                        gap: 1.5,
                        "&:hover": {
                            color: indigo[900],
                        }
                    }}
                    onClick={() => {
                        window.Calendly?.initPopupWidget({ url: 'https://calendly.com/getintouch-malda/30min_free_call' })
                        return false;
                    }}
                    className="pulse-anim"
                >
                    <Phone />
                    Schedule Free Call
                </Fab>
            </>
    );

    const floatingForm = (
        <>
            <Backdrop open={open}
                sx={{
                    zIndex: theme.zIndex.appBar + 1,
                    backdropFilter: "blur(5px)"
                }}
                onScroll={e => e.preventDefault()}
            />
            <Collapse
                in={open}
                sx={{
                    position: "fixed",
                    right: {
                        xs: 0,
                        sm: "25px"
                    },
                    bottom: "25px",
                    zIndex: theme.zIndex.appBar + 1,
                }}
            >
                <Box>
                    <Box
                        sx={{
                            position: "fixed",
                            bottom: "250px",
                            right: "500px",
                            display: {
                                xs: "none",
                                laptop: "flex"
                            },
                            alignItems: "flex-end",
                            opacity: open ? 1 : 0,
                            transition: ".2s opacity linear"
                        }}
                    >
                        <Paper
                            sx={{
                                width: {
                                    laptop: 400,
                                    lg: 500
                                },
                                // height: 400,
                                // maskImage: `url('${mask}')`,
                                maskSize: "contain",
                                maskPosition: "center",
                                maskRepeat: "no-repeat",
                                borderRadius: 5,
                                backgroundImage: "linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('https://assets.hongkiat.com/uploads/holographic-gradient-background/6.jpg')"
                            }}
                        >
                            <Typography
                                sx={{
                                    p: 4
                                }}
                            // variant="subtitle2"
                            >
                                Thanks for visiting my website! As a web developer, I understand the challenges of creating a great website on a limited budget. That's why I'm excited to offer you a 20% discount on my web development services when you fill out my project requirements form. By providing me with some basic information about your project, you'll receive a personalized quote and expert advice on how to bring your vision to life. I take pride in providing top-notch service to each and every one of my clients, and I'm confident that you'll be satisfied with the results.
                            </Typography>
                        </Paper>
                        <img
                            src={arrow}
                            alt={""}
                            width={200}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 1
                        }}
                    >
                        <IconButton
                            onClick={closeForm}
                            color={"secondary"}
                            sx={{
                                bgcolor: `${alpha("#ffffff", 1)} !important`,
                                color: "#F35045"
                            }}
                        >
                            <Close />
                        </IconButton>
                        {
                            contactForm()
                        }
                    </Box>
                </Box>
            </Collapse>
        </>
    );

    return {
        openForm,
        closeForm,
        floatingForm,
        ContactFAB,
        contactForm
    }
}