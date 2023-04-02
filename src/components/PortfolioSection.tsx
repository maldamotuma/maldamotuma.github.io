import { Celebration, DoneAll, Favorite, Insights, Link } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Container, createTheme, Divider, List, ListItem, ListItemIcon, ListItemText, Stack, ThemeProvider, Typography, useTheme } from "@mui/material";
import { blueGrey, indigo } from "@mui/material/colors";
import { FunctionComponent } from "react";

import port1 from "../images/port1.jpg";
import port2 from "../images/port2.jpg";
import portfolios from "./portfolio";
import { useVideoModal } from "./videoDialog";

interface PortfolioSectionProps {

}

const PortfolioSection: FunctionComponent<PortfolioSectionProps> = () => {
    const theme = useTheme();
    const newTheme = createTheme({
        ...theme,
        palette: {
            mode: "dark"
        }
    });
    return (
        <ThemeProvider
            theme={newTheme}
        >
            <Box
                sx={{
                    bgcolor: blueGrey[900],
                    py: 15
                }}
            >
                <Container>
                    {
                        portfolios.map(portfolio => (
                            <>
                                <SinglePortfolio
                                    portfolio={portfolio}
                                />
                                <Divider sx={{ my: 5 }} />
                            </>
                        ))
                    }
                    <Box
                        sx={{
                            pb: 5
                        }}
                    >
                        <Chip
                            icon={<Favorite />}
                            label={"other projects"}
                            size={"small"}
                            sx={{
                                mb: 1
                            }}
                        />
                        <Typography
                            variant={"h2"}
                            component={"h2"}
                            color={"text.primary"}
                            fontSize={35}
                            fontWeight={500}
                            sx={{
                                mb: 2
                            }}
                        >
                            A Glimpse of My Diverse Skill Set: Other Small Showcase Projects
                        </Typography>
                        <Stack
                            direction={"row"}
                            flexWrap={"wrap"}
                        >
                            <Box
                                sx={{
                                    width: {
                                        xs: "100%",
                                        tablet: "50%",
                                        laptop: "25%",
                                    },
                                    p: 1,
                                    boxSizing: "border-box"
                                }}
                            >
                                <SmallPortfolio />
                            </Box>
                            <Box
                                sx={{
                                    width: {
                                        xs: "100%",
                                        tablet: "50%",
                                        laptop: "25%",
                                    },
                                    p: 1,
                                    boxSizing: "border-box"
                                }}
                            >
                                <SmallPortfolio />
                            </Box>
                            <Box
                                sx={{
                                    width: {
                                        xs: "100%",
                                        tablet: "50%",
                                        laptop: "25%",
                                    },
                                    p: 1,
                                    boxSizing: "border-box"
                                }}
                            >
                                <SmallPortfolio />
                            </Box>
                            <Box
                                sx={{
                                    width: {
                                        xs: "100%",
                                        tablet: "50%",
                                        laptop: "25%",
                                    },
                                    p: 1,
                                    boxSizing: "border-box"
                                }}
                            >
                                <SmallPortfolio />
                            </Box>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default PortfolioSection;

interface portfolioProps {
    project: string;
    chip: string;
    title: string;
    description: string;
    card: {
        title: string;
        description: string
    };
    lists: {
        Title: string;
        Description: string;
    }[]

}
const SinglePortfolio = ({ portfolio }: { portfolio: portfolioProps }) => {
    const { modal, openDialog } = useVideoModal("malda");
    return (
        <Stack
            direction={"row"}
            flexWrap={"wrap"}
            alignItems={"flex-start"}
        >
            {
                modal
            }
            <Box
                sx={{
                    width: {
                        xs: "100%",
                        tablet: "40%",
                        laptop: "50%"
                    },
                    position: {
                        tablet: "sticky"
                    },
                    top: "80px",
                    pr: {
                        tablet: 5,
                        laptop: 0
                    },
                    boxSizing: "border-box"
                }}
            >
                <Card
                    elevation={0}
                    sx={{
                        bgcolor: "transparent",
                        maxWidth: 450
                    }}
                >
                    <CardMedia
                        component={"img"}
                        alt={"Malda's Portfolio"}
                        src={port1}
                        sx={{
                            // width: "100%",
                            // maxWidth: 350,
                            borderRadius: 3
                        }}
                    />
                    <CardContent
                        sx={{
                            pb: 0
                        }}
                    >
                        <Chip
                            label={"Full-Stack Development"}
                            icon={<Insights sx={{
                                color: "info.light"
                            }} />}
                            sx={{
                                bgcolor: "transparent",
                                color: "info.light"
                            }}
                        />
                    </CardContent>
                    <CardHeader
                        title={portfolio.card.title}
                        subheader={portfolio.card.description}
                        titleTypographyProps={{
                            color: "text.primary",
                            fontSize: 18
                        }}
                        subheaderTypographyProps={{
                            fontSize: 14
                        }}
                        sx={{
                            maxWidth: 400,
                            pt: 0
                        }}
                    />
                    <CardActions>
                        <Button
                            onClick={openDialog}
                        >
                            See Detail
                        </Button>
                        <Button>
                            Go to Address
                        </Button>
                    </CardActions>
                </Card>
            </Box>
            <Box
                sx={{
                    width: {
                        xs: "100%",
                        tablet: "60%",
                        laptop: "50%"
                    },
                    pt: {
                        xs: 3,
                        tablet: 0
                    }
                }}
            >
                <Chip
                    icon={<Celebration />}
                    label={portfolio.chip}
                    size={"small"}
                />
                <CardHeader
                    title={portfolio.title}
                    subheader={portfolio.description}
                    titleTypographyProps={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: "text.primary"
                    }}
                    sx={{
                        px: 0
                    }}
                />
                <List>
                    {
                        portfolio.lists.map(ftr => (
                            <ListItem
                                sx={{
                                    alignItems: "flex-start"
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        pt: 1
                                    }}
                                >
                                    <DoneAll />
                                </ListItemIcon>
                                <ListItemText
                                    primary={ftr.Title}
                                    secondary={ftr.Description}
                                    primaryTypographyProps={{
                                        color: "text.primary"
                                    }}
                                />
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </Stack>
    )
}

const SmallPortfolio = () => {
    return (
        <Card
            variant="outlined"
            sx={{
                bgcolor: "transparent"
            }}
        >
            <CardMedia
                component={"img"}
                alt={""}
                src={port2}
            />
            <CardHeader
                title={"Some Header Tittle Goest Proudly here bro this is insane wow it is quite interesting bro"}
                subheader={<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, rerum quos dolor ab doloribus expedita hic atque quae veniam suscipit placeat, excepturi et illo assumenda at tempore commodi blanditiis non?</>}
            />
            <CardActions>
                <Button
                    startIcon={<Link />}
                    sx={{
                        color: "#ffffff"
                    }}
                >
                    View Portfolio
                </Button>
            </CardActions>
        </Card>
    )
}