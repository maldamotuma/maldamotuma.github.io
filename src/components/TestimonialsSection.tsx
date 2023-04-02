import { Avatar, Box, Card, CardContent, CardHeader, Container, Rating, Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface TestimonialsSectionProps {

}

const TestimonialsSection: FunctionComponent<TestimonialsSectionProps> = () => {
    return (
        <Box
            sx={{
                bgcolor: "#ffffff",
                py: 15
            }}
        >
            <Container>
                <Box
                    sx={{
                        position: "relative",
                        mb: 5
                    }}
                >
                    <Typography
                        fontSize={40}
                        fontWeight={700}
                        color={"#263238"}
                        sx={{
                            position: "relative",
                            zIndex: 1,
                            pl: 5,
                            lineHeight: "1em"
                        }}
                    >
                        Testimonials
                    </Typography>
                    <Typography
                        fontSize={{
                            xs: 60,
                            laptop: 100
                        }}
                        fontWeight={900}
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: 0,
                            transform: "translateY(-50%)",
                            opacity: .05,
                            lineHeight: "1em"
                        }}
                    >
                        Testimonials
                    </Typography>
                </Box>
                <Typography
                    fontSize={20}
                    fontWeight={800}
                    color={"#263238"}
                    sx={{
                        mb: 1
                    }}
                >
                    Some Words of My Clients
                </Typography>
                <Stack
                    flexDirection={"row"}
                    flexWrap={"wrap"}
                >
                    {
                        [1, 2, 3, 4, 5, 6].map(ttss => (
                            <Box
                                sx={{
                                    width: {
                                        xs: "100%",
                                        tablet: "50%"
                                    },
                                    p: 1,
                                    boxSizing: "border-box"
                                }}
                            >
                                <Testimony />
                            </Box>
                        ))
                    }
                </Stack>
            </Container >
        </Box >
    );
}

export default TestimonialsSection;

const Testimony = () => {
    return (
        <Card
            variant={"outlined"}
        >
            <CardContent>
                <Rating
                    value={5}
                    readOnly
                    size={"small"}
                    color={"#0099ff"}
                />
                <Typography fontWeight={600}>Wonderfull Developer</Typography>
                "Fantastic service completed tasks on demand. Excellent work done with efficiency. Thanks for the help; Muawiyah's cooperation is fantastic and informative."
            </CardContent>
            <CardHeader
                title={"Ibraheem Qidwai"}
                subheader={"Founder of My Renture"}
                avatar={<Avatar src={"https://img.freepik.com/free-photo/brunette-blogger-posing-photo_23-2148192223.jpg?w=360"} />}
            />
        </Card>
    )
}