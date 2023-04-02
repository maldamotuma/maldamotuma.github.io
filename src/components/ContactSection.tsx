import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Button, Container, createTheme, IconButton, Paper, Stack, TextField, ThemeProvider, Typography, useTheme } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import { email_config } from "../conf/config";

declare global {
    interface Window {
        Email: any;
    }
}


interface ContactSectionProps {

}

const ContactSection: FunctionComponent<ContactSectionProps> = () => {
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
                    bgcolor: "#090517",
                    pt: 0,
                    pb: 10,
                    color: "text.primary",
                    position: "relative"
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: '50px',
                        bgcolor: "#ffffff"
                    }}
                />
                <Container>
                    <Paper
                        sx={{
                            // mt: "-100px",
                            position: "relative",
                            boxShadow: 5,
                            py: 1,
                            bgcolor: "#ffffff",
                            borderRadius: 2
                        }}
                    >
                        <Typography
                            align={"center"}
                            fontWeight={800}
                            fontSize={14}
                            color={"#4629F2"}
                            sx={{
                                position: "relative",
                                mb: 1,
                                textTransform: "uppercase",
                                "&::before": {
                                    position: "absolute",
                                    bottom: -3,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    content: "''",
                                    width: 50,
                                    height: 3,
                                    borderRadius: 2,
                                    bgcolor: deepOrange[500]
                                }
                            }}
                        >
                            Get in Touch
                        </Typography>
                        <Typography
                            fontSize={30}
                            align={"center"}
                            fontWeight={800}
                            color={"#555"}
                        >
                            Let's Collaborate on Your Next Web Project
                        </Typography>
                    </Paper>
                    <Stack
                        direction={{
                            xs: "column-reverse",
                            tablet: "row-reverse"
                        }}
                        flexWrap={"wrap"}
                        spacing={{
                            xs: 5,
                            tablet: 0
                        }}
                        sx={{
                            mt: 4,
                            pt: 2
                        }}
                    >
                        <Box
                            sx={{
                                width: {
                                    xs: "100%",
                                    tablet: "50%"
                                },
                                display: "flex",
                                justifyContent: "flex-end"
                            }}
                        >
                            <ContactForm />
                        </Box>
                        <Box
                            sx={{
                                width: {
                                    xs: "100%",
                                    tablet: "50%"
                                },
                                // pl: 2,
                                boxSizing: "border-box"
                            }}
                        >
                            <Box>
                                <IconButton>
                                    <GitHub />
                                </IconButton>
                                <IconButton>
                                    <LinkedIn />
                                </IconButton>
                                <IconButton>
                                    <Facebook />
                                </IconButton>
                                <Typography
                                    variant={"caption"}
                                    sx={{
                                        display: "block"
                                    }}
                                >
                                    maldamotuma@gmail.com
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    mt: 2
                                }}
                                variant="body1"
                            >
                                Whether you have a question, a project idea, or just want to say hello, I'd love to hear from you. As a full-stack web developer, I am always excited to work on new projects and collaborate with creative individuals. Don't hesitate to reach out and let's see what we can create together.
                            </Typography>
                            {/* <Typography
                            variant={"body2"}
                        >
                            Do you need a stunning website to showcase your brand, sell your products, or share your message with the world? Look no further! As an experienced web developer, I can design and build a custom website that meets your needs and exceeds your expectations. From responsive layouts to interactive features, I know how to create websites that look great and work smoothly on any device. So why wait? Click the button on the right bottom of the screen to order your website today and let's make your online dreams a reality!
                        </Typography> */}
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default ContactSection;

const ContactForm = () => {
    const [formState, setFormState] = useState<any>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (window.Email) {
            window.Email.send({
                ...email_config,
                Subject: `CF- ${formState.subject}`,
                Body: `
                <strong>Name: ${formState.name}</strong> <br />
                <strong>Email: ${formState.email}</strong> <br />
                ${formState.content}`
            }).then((res: any) => {
                if (res === "OK") alert('done!!');
                else alert("Check your Email")
                console.log(res);
            }).catch((err: any) => {
                console.log(err);
                alert('Error')
            });
        }
    }

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: {
                    tablet: 450
                }
            }}
        >
            <Stack
                spacing={2}
                component={"form"}
                onSubmit={handleSubmit}
            >
                <TextField
                    size="small"
                    fullWidth
                    placeholder="here..."
                    label={"Full Name"}
                    name={"name"}
                    value={formState.name}
                    onChange={handleChange}
                />
                <TextField
                    size="small"
                    fullWidth
                    placeholder="here..."
                    label={"Email"}
                    name={"email"}
                    value={formState.email}
                    onChange={handleChange}
                />
                <TextField
                    size="small"
                    fullWidth
                    placeholder="here..."
                    label={"Subject"}
                    name={"subject"}
                    value={formState.subject}
                    onChange={handleChange}
                />
                <TextField
                    size="small"
                    fullWidth
                    placeholder="here..."
                    label={"Message"}
                    multiline
                    rows={3}
                    name={"content"}
                    value={formState.content}
                    onChange={handleChange}
                />
                <Box
                    sx={{
                        pt: 2
                    }}
                >
                    <Button
                        variant="contained"
                        type={"submit"}
                    >
                        Submit
                    </Button>
                </Box>
            </Stack>
        </Box>
    )
}