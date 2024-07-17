import { FC, useEffect } from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { DEFAULT_AVA } from "../../../utils/constant/avatar";
import { useAppDispatch, useAppSelector } from "../../../store/index";
import { API } from "../../../lib/api";
import { IAuthor } from "../../../types/app";
import { myProfileAsync } from "../../../store/async/myProfileAsync";
import { getProfileAsync } from "../../../store/async/profileAsync";
import { getSuggestedAsync } from "../../../store/async/suggestedAsync";

interface IProps {
    profile: IAuthor;
}

const Suggested: FC<IProps> = ({ profile }) => {
    const dispatch = useAppDispatch();
    const suggested = useAppSelector((state) => state.suggested.Author);

    useEffect(() => {
        dispatch(getSuggestedAsync());
    }, [dispatch]);

    const findFollow = (followingId: string) => {
        const followingArray = Array.isArray(profile.following) ? profile.following : [];
        return followingArray.some(obj => obj.followingId === followingId);
    };
    const suggestions = Array.isArray(suggested) ? suggested : [];

    const handleFollow = async (userId: string) => {
        try {
            const res = await API.post(`follow/${userId}`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            console.log(res.data);

            dispatch(myProfileAsync());
            dispatch(getSuggestedAsync());
            dispatch(getProfileAsync(profile.id!))
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Box
            width={"100%"}
            sx={{
                bgcolor: "#262626",
                display: "flex",
                flexDirection: "column",
                borderRadius: "10px",
                padding: "10px"
            }}
        >
            <Box padding={"10px"}>
                <Typography variant="h6" fontWeight={"700"} padding={"10px"}>
                    Suggested For You
                </Typography>
            </Box>
            <Box>
                {suggestions.map((suggest) => (
                    <Box key={suggest.id} padding={"10px"} sx={{ display: "flex", padding: "10px", alignItems: "center", justifyContent: "space-between" }}>
                        <Box width={"70%"} sx={{ display: "flex", alignItems: "center", overflowX: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginRight: '10px' }}>
                            <Avatar src={suggest.profile?.photoProfile ?? DEFAULT_AVA} />
                            <Box sx={{ marginLeft: "20px", display: "flex", flexDirection: "column" }}>
                                <Typography variant="body1" fontWeight={700}>
                                    {suggest.fullname}
                                </Typography>
                                <Typography variant="body2" color="grey" fontWeight={300} >
                                    @{suggest.profile?.username}
                                </Typography>
                            </Box>
                        </Box>
                        <Button onClick={(e) => handleFollow(suggest.id!)} sx={{ borderRadius: "20px", border: "2px solid white", color: "white" }}>
                            {findFollow(suggest.id!) ? "Following" : "Follow"}
                        </Button>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Suggested;
