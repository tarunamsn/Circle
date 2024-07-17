import { useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import { useAppDispatch } from "../../store/index";
import { SET_LOGOUT } from "../../store/slice/auth";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LogoutIcon from '@mui/icons-material/Logout';
import CreatePost from "./createPost";
import MenuItem from "./MenuItem";

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const [openLogout, setOpenLogout] = useState(false); // State untuk modal logout

    const handleLogout = () => {
        setOpenLogout(true);
    };

    const handleConfirmLogout = () => {
        dispatch(SET_LOGOUT());
    }

    const handleCloseLogout = () => {
        setOpenLogout(false);
    };

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            padding: 5,
            gap: 2,
        }}>
            <Typography variant="h4" fontWeight={800} color={"#04A51E"}>circle</Typography>
            <Box>
                <MenuItem />
            </Box>
            <Box>
                <CreatePost />
            </Box>
            <Button
                sx={{
                    padding: "0",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    marginTop: "auto",
                    fontWeight: 500,
                    justifyContent: "start"
                }}
                onClick={handleLogout}
            >
                <LogoutIcon sx={{ transform: "rotate(180deg)" }} />
                <Typography textAlign={"start"}>Logout</Typography>
            </Button>
            <Modal
                open={openLogout}
                onClose={handleCloseLogout}
                aria-labelledby="logout-modal-title"
                aria-describedby="logout-modal-description"
            >
                <Box sx={{
                    padding: "15px 10px",
                    borderRadius: "5px",
                    color: "white",
                    bgcolor: "#1d1d1d",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "300px",
                    textAlign: "center",
                }}>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }} >
                        <HighlightOffIcon sx={{ color: "#909090", cursor: "pointer" }} onClick={handleCloseLogout} />
                    </Box>
                    <Typography
                        variant="h6"
                        color={"#04A51E"}
                        fontWeight={700}
                        sx={{ marginBottom: "15px" }}
                    >
                        Logout
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "30px" }}>
                        Are you sure you want to logout?
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Button
                            onClick={handleConfirmLogout}
                            sx={{
                                bgcolor: "#FF0000",
                                color: "white",
                                borderRadius: "20px",
                                fontWeight: 500,
                                px: 4,
                            }}>
                            Yes
                        </Button>
                        <Button
                            onClick={handleCloseLogout}
                            sx={{
                                bgcolor: "#04A51E",
                                color: "white",
                                borderRadius: "20px",
                                fontWeight: 500,
                                px: 4,
                            }}>
                            No
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default Sidebar;