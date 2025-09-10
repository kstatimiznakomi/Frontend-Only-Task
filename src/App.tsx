import React from 'react';
import DesktopWrapper from "@composite/Wrappers/DesktopWrapper/DesktopWrapper";
import {useMediaQuery} from "react-responsive";
import MobileLayout from "@/layouts/MobileLayout/MobileLayout";

const App = () => {
    const isMobile = useMediaQuery({maxWidth: 320});

    return (
        <>
            {
                isMobile ? <MobileLayout/> : <DesktopWrapper/>
            }
        </>
    );
};

export default App;