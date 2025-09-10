import React from 'react';
import ShadowButton from "@components/Buttons/ShadowButtons/ShadowButton";

const ShadowLeftButton = () => {
    return (
        <div>
            <ShadowButton>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 6L1 11" stroke="#3877EE"/>
                </svg>
            </ShadowButton>
        </div>
    );
};

export default ShadowLeftButton;