import { Close } from "@mui/icons-material";
import { Button, Dialog, DialogActions, IconButton } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import CalltoActionSection from "./CalltoActionSection";

interface DiscountDialogProps {
    children(closeDialog: () => void): JSX.Element;
}

const DiscountDialog: FunctionComponent<DiscountDialogProps> = (props) => {
    const { children } = props;

    const [open, setOpen] = useState(false);

    const openDialog = () => {
        setOpen(true);
    }

    const closeDialog = () => {
        setOpen(false);
    }

    useEffect(() => {
        setTimeout(() => {
            openDialog();
        }, 5000);
    }, []);



    return (
        <>
            <Dialog
                open={open}
                fullWidth
                maxWidth={"lg"}
            >
                {
                    children(closeDialog)
                }
                <DialogActions>
                    <Button
                        variant={"contained"}
                        onClick={closeDialog}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default DiscountDialog;