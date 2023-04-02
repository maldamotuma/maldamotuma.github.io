import { Build, Business, Celebration, Construction, DeveloperBoard, GroupAdd, Update, WebAsset } from "@mui/icons-material";
import { alpha, Box, Card, CardContent, CardHeader, Chip, Container, Stack, Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { FunctionComponent } from "react";

const servicesList = [
    {
        Chip: "Full-Stack Development",
        Title: "End-to-End Web Application Development",
        Subtitle: "For businesses and startups",
        Description: "Develop custom web applications with React-Laravel or MERN Stack that meet your unique needs and requirements.",
        icon: <WebAsset
            className="service-icon"
            sx={{
                width: 30,
                height: 30,
                color: "info.main",
                borderRadius: "50%",
                p: 1,
                position: "relative",
                zIndex: 1
            }}
        />
    },
    {
        Chip: "Full",
        Title: "Web Application Improvement",
        Subtitle: "For companies",
        Description: "Enhance your existing web applications with full-stack development expertise in React-Laravel or MERN Stack for improved user experience, and scalability.",
        icon: <Update
            className="service-icon"
            sx={{
                width: 30,
                height: 30,
                color: "info.main",
                borderRadius: "50%",
                p: 1,
                position: "relative",
                zIndex: 1
            }}
        />
    },
    {
        Chip: "Full-Stack Development",
        Title: "Team Development Support",
        Subtitle: "For development teams",
        Description: "Join your development team and contribute to ongoing projects with full-stack development expertise in React-Laravel or MERN Stack.",
        icon: <GroupAdd
            className="service-icon"
            sx={{
                width: 30,
                height: 30,
                color: "info.main",
                borderRadius: "50%",
                p: 1,
                position: "relative",
                zIndex: 1
            }}
        />
    },
    {
        Chip: "Full-Stack Development",
        Title: "Custom Web Development Solutions",
        Subtitle: " For entrepreneurs, small business owners, and digital agencies",
        Description: "Create visually stunning and user-friendly web applications with a focus on scalability and responsiveness using React-Laravel or MERN Stack.",
        icon: <Build
            className="service-icon"
            sx={{
                width: 30,
                height: 30,
                color: "info.main",
                borderRadius: "50%",
                p: 1,
                position: "relative",
                zIndex: 1
            }}
        />
    }
];
interface ServicesSectionProps {

}

const ServicesSection: FunctionComponent<ServicesSectionProps> = () => {
    return (
        <Container
            sx={{
                py: 5,
                mt: 5,
                color: "#ffffff"
            }}
        >
            <Box>
                <Chip
                    label={"Full-Stack Development"}
                    icon={<DeveloperBoard />}
                    color={"info"}
                    size={"small"}
                    sx={{
                        bgcolor: theme => alpha(theme.palette.info.main, .15)
                    }}
                />
                <Typography
                    fontSize={25}
                    fontWeight={600}
                    sx={{
                        mt: .5,
                        mb: 2
                    }}
                >
                    Who I work with
                </Typography>
            </Box>
            <Stack
                direction={"row"}
                flexWrap={"wrap"}
                alignItems={"stretch"}
            >
                {
                    servicesList.map(srvc => <Box
                        sx={{
                            width: {
                                xs: "100%",
                                tablet: "50%"
                            },
                            p: 1,
                            boxSizing: "border-box"
                        }}
                    >
                        <SingleService service={srvc} />
                    </Box>)
                }
            </Stack>
        </Container>
    );
}

export default ServicesSection;

const SingleService = ({ service }: {
    service: {
        Chip: string;
        Title: string;
        Subtitle: string;
        Description: string;
        icon: JSX.Element;
    }
}) => {
    return (
        <Card
            variant="outlined"
            sx={{
                bgcolor: "#222222",
                borderColor: "transparent",
                pt: 1,
                height: "100%",
                transition: ".2s all linear",
                color: "#ffffff",
                "&:hover": {
                    bgcolor: indigo[900],
                },
                "&:hover .service-icon-wrapper": {
                    // bgcolor: indigo[900],
                    color: "#ffffff",
                    "&::before": {
                        width: 40,
                        height: 40,
                        top: "45%",
                        left: 0,
                        transform: "translateY(-50%)",
                        bgcolor: theme => alpha(theme.palette.info.main, .5),
                    }
                },
                "&:hover .service-icon": {
                    color: "#ffffff"
                }
            }}
        >
            <CardContent
                sx={{
                    py: 0
                }}
            >
                <Box
                    className="service-icon-wrapper"
                    sx={{
                        pb: 1,
                        position: "relative",
                        "&::before": {
                            content: '""',
                            width: 40,
                            height: 40,
                            bgcolor: theme => alpha(theme.palette.info.main, .1),
                            display: "inline-block",
                            position: "absolute",
                            borderRadius: "50%",
                            rop: "50%",
                            left: "-10px",
                            transition: ".2s all linear",
                            // transition: ".35s all ease",
                        }
                    }}
                >
                    {
                        service.icon
                    }
                </Box>
                <Box>
                    <Chip
                        label={service.Chip}
                        icon={<Construction />}
                        color={"info"}
                        size={"small"}
                        variant={"outlined"}
                        className="service-icon-chip"
                    />
                </Box>
            </CardContent>
            <CardHeader
                title={service.Title}
                subheader={service.Subtitle}
                titleTypographyProps={{
                    // color: "primary.dark",
                    fontWeight: 600,
                    fontSize: 18
                }}
                subheaderTypographyProps={{
                    color: "primary.main",
                    fontSize: 14
                }}
                sx={{
                    py: 1
                }}
            />
            <CardContent
                sx={{
                    py: 0,
                    fontSize: 14
                }}
            >
                {
                    service.Description
                }
            </CardContent>
        </Card>
    )
}