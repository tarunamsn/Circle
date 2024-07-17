import React from 'react'
import { useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../store/index'
import { myProfileAsync } from '../../store/async/myProfileAsync'
import Profile from './components/profile'
import Suggested from './components/suggested'
import Widget from './components/widget'

const RightSidebar = () => {
    const profile = useAppSelector((state) => state.profile);
    const dispath = useAppDispatch();
    const location = useLocation();

    React.useEffect(() => {
        dispath(myProfileAsync());
    }, []);

    const isProfileHidden = location.pathname === `/profile/${profile.profile.id}`;
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {!isProfileHidden && <Profile />}
            <Suggested profile={profile.profile} />
            <Widget />
        </Box>
    );
};

export default RightSidebar;