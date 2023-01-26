import React, {useEffect} from 'react';
import './App.css';
import Auth from './pages/Auth';
import {pageRoutes} from './routes';
import {useGetProfile} from './api/auth';
import {AppBar, Box, Toolbar} from '@mui/material';
import Appointment from './pages/Appointment';
import Appointments from './pages/Appointments';
import UserProfile from './components/UserProfile/UserProfile';
import {Routes, Route, useNavigate} from 'react-router-dom';

function App() {
    const navigate = useNavigate();
    const {error} = useGetProfile();

    useEffect(() => {
        if (error) {
            navigate(pageRoutes.auth);
        }
    }, [error]);

    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box display="flex" justifyContent="flex-end" width="100%">
                        <UserProfile/>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box width={500} m="auto" mt={2}>
                <Routes>
                    <Route path={pageRoutes.main} element={<Appointments/>}/>
                    <Route path={pageRoutes.auth} element={<Auth/>}/>
                    <Route path={pageRoutes.appointment} element={<Appointment/>}/>
                </Routes>
            </Box>
        </>
    );
}

export default App;
