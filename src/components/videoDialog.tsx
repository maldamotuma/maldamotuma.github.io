import { Close } from "@mui/icons-material";
import { Dialog, IconButton } from "@mui/material";
import { useState } from "react";

export const useVideoModal = (vid_url: string) => {
    const [open, setOpen] = useState<boolean>(false);

    const openDialog = () => {
        setOpen(true);
    }

    const closeDialog = () => {
        setOpen(false);
    }

    const modal = (
        <Dialog
            open={open}
            onClose={closeDialog}
            fullWidth
            maxWidth={"md"}
        >
            <IconButton
                sx={{
                    color: "#ffffff",
                    position: "fixed",
                    top: 25,
                    right: 25,
                    bgcolor: theme => theme.palette.action.hover
                }}
                onClick={closeDialog}
            >
                <Close
                    sx={{
                        fontSize: "35px",
                    }}
                />
            </IconButton>
            <iframe src="https://player.vimeo.com/video/786201103?h=4cb66c5405&color=cfff3f" width="100%" allow="autoplay; fullscreen; picture-in-picture" style={{
                aspectRatio: "16/9",
                boxSizing: "border-box",
                border: 0
            }}></iframe>
        </Dialog>
    );

    return {
        openDialog,
        modal
    }

}