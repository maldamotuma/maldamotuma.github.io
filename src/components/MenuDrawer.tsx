import { Close, Download, Menu } from "@mui/icons-material";
import { Avatar, Button, CardHeader, Drawer, IconButton, List, ListItemButton, ListItemIcon } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { links } from "./MaldaAppbar";
import hs from "../images/head_shoot.jpg";
import { indigo } from "@mui/material/colors";

interface MenuDrawerProps {

}

const MenuDrawer: FunctionComponent<MenuDrawerProps> = () => {
    const [open, setOpen] = useState<boolean>(false);

    const openDrawer = () => {
        setOpen(true);
    }

    const closeDrawer = () => {
        setOpen(false);
    }

    return (
        <>
            <IconButton
                onClick={openDrawer}
                sx={{
                    display: {
                        laptop: "none",
                    },
                    bgcolor: "#ffffff !important",
                    color: indigo[900]
                }}
            >
                <Menu />
            </IconButton>
            <Drawer
                open={open}
                onClose={closeDrawer}
            >
                <IconButton
                    color={"error"}
                    sx={{
                        position: "fixed",
                        top: "10px",
                        left: "250px",
                        bgcolor: "#ffffff !important"
                    }}
                    onClick={closeDrawer}
                >
                    <Close />
                </IconButton>
                <List
                    sx={{
                        width: 240
                    }}
                    subheader={
                        <CardHeader
                            avatar={<Avatar src={hs} sx={{ width: 150, height: 150, boxShadow: 1 }} />}
                            title={"Malda Motuma"}
                            subheader={"Full-Stack Software Developer"}
                            sx={{
                                flexDirection: "column",
                                textAlign: "center",
                            }}
                            titleTypographyProps={{
                                fontWeight: 700,
                                fontSize: 20
                            }}
                            subheaderTypographyProps={{
                            }}
                        />
                    }
                >
                    {
                        links.map(lnk => (
                            <ListItemButton>
                                <ListItemIcon>
                                    {
                                        lnk.icon
                                    }
                                </ListItemIcon>
                                {
                                    lnk.title
                                }
                            </ListItemButton>
                        ))
                    }
                </List>
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: "#0099ff",
                        color: "#ffffff",
                        mx: 2,
                        mt: 2,
                        display: {
                            xs: "flex",
                            sm: "none"
                        },
                        maxWidth: "100%"
                    }}
                    startIcon={<Download />}
                    disableElevation
                >
                    Get My Resume
                </Button>
            </Drawer>
        </>
    );
}

export default MenuDrawer;