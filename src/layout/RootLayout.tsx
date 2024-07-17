import { Box, Container } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";
import { useAppDispatch, useAppSelector } from "../store";
import { myProfileAsync } from "../store/async/myProfileAsync";

const RootLayout = () => {
    const dispatch = useAppDispatch();
    const token = localStorage.getItem("token");
    const isLogin = useAppSelector((state) => state.auth.isLogin);

    useEffect(() => {
        if (token) {
            dispatch(myProfileAsync());
        }
    }, [dispatch, token]);

    if (!isLogin) {
        return <Navigate to="/auth/login" />;
    }

    return (
        <Box className="container">
            <Container
                className="container"
                sx={{
                    display: "flex",
                    height: "100vh",
                    width: "100%",
                    color: "#fff",
                }}
            >
                <Box flex={1} sx={{}}>
                    <Sidebar />
                </Box>
                <Box
                    flex={2.5}
                    className="thread-container"
                    sx={{
                        borderLeft: "3px solid #3f3f3f",
                        borderRight: "3px solid #3f3f3f",
                        overflowY: "auto",
                    }}
                >
                    <Outlet />
                </Box>
                <Box flex={1.5} className="thread-container" sx={{
                    overflowY: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    marginLeft: "15px",
                    paddingY: "20px",
                    width: "100%"
                }}>
                    <RightSidebar />
                </Box>
            </Container>
        </Box>
    );
};

export default RootLayout;