import { ArrowForward, Celebration, ImportantDevices } from "@mui/icons-material";
import { Box, Button, CardActions, Chip, Container, Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface CalltoActionSectionProps {
    openForm(): void;
    closeDialog?: () => void;
}

const CalltoActionSection: FunctionComponent<CalltoActionSectionProps> = (props) => {
    const { openForm, closeDialog } = props;

    const openOfferForm = () => {
        if(closeDialog) closeDialog();
        openForm();
    }
    return (
        <Box
            sx={{
                bgcolor: "#ffffff"
            }}
        >
            <Container>
                <Stack
                    direction={"row"}
                    flexWrap={"wrap"}
                    alignItems={"center"}
                >
                    <Box
                        sx={{
                            width: {
                                xs: "100%",
                                tablet: "50%"
                            }
                        }}
                    >
                        <Chip
                            label={"Miss it not!"}
                            icon={<ImportantDevices sx={{
                                color: "#44a7dd !important",
                            }} />}
                            sx={{
                                bgcolor: "transparent",
                                color: "info.main",
                                fontWeight: 600
                            }}
                        />
                        <Typography
                            fontSize={25}
                            fontWeight={600}
                            lineHeight={"1.2em"}
                            sx={{
                                mb: 1.5,
                                mt: .5
                            }}
                        >
                            <span
                                style={{
                                    color: "#2b29f2"
                                }}
                            >
                                Professionally-designed websites
                            </span> to get you <span
                                style={{
                                    color: "#2b29f2"
                                }}
                            >
                                more leads, sales, and fans!
                            </span>
                        </Typography>
                        <Typography
                            fontSize={14}
                            fontWeight={500}
                            color={"text.secondary"}
                        >
                            A <strong>well-developed website</strong> can help you attract more <strong>customers, generate leads, and increase sales for your business.</strong> With a high-quality website that reflects your brand, engages your audience, and converts visitors into customers, you can increase your online visibility, build trust with your audience, and drive more traffic to your site. <strong>Don't settle for less, order your website today and start seeing the results you deserve!</strong>
                        </Typography>
                        <CardActions
                            sx={{
                                p: 0,
                                pt: 4
                            }}
                        >
                            <Button
                                variant={"outlined"}
                                startIcon={<Celebration />}
                                onClick={openOfferForm}
                            >
                                Smash 20% Discount
                            </Button>
                            <Button
                                // size={"small"}
                                onClick={openOfferForm}
                                sx={{
                                    textTransform: "none"
                                }}
                                endIcon={<ArrowForward />}
                            >
                                Get free one page website
                            </Button>
                        </CardActions>
                    </Box>
                    <Box
                        sx={{
                            width: {
                                xs: "100%",
                                tablet: "50%"
                            }
                        }}
                    >
                        <Box
                            component={"img"}
                            alt={""}
                            src={"https://www.sender.net/wp-content/uploads/2022/02/Conversion-Rate-Optimization-smaller.png"}
                            width={"100%"}
                        />
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}

export default CalltoActionSection;