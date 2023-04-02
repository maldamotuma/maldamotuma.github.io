import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { FunctionComponent } from "react";

interface NavButtonsProps {

}

const NavButtons: FunctionComponent<NavButtonsProps> = () => {
    return (
        <>
            <Fab
                sx={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    left: 3,
                    "&.swiper-button-disabled": {
                        bgcolor: "text.secondary",
                        display: "none",
                    }
                }}
                color="info"
                className="swiper-button-previous"
            >
                <ArrowBack />
            </Fab>
            <Fab
                sx={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    right: 3,
                    "&.swiper-button-disabled": {
                        bgcolor: "text.secondary",
                        display: "none"
                    }
                }}
                color="info"
                className="swiper-next"
            >
                <ArrowForward />
            </Fab>
        </>
    );
}

export default NavButtons;