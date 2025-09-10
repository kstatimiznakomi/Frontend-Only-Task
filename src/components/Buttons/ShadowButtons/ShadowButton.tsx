import React, {ReactNode} from 'react';
import styled from "styled-components";
import {CircleStyled} from "@components/Buttons/BaseCircle/Circle";

const ShadowButton: React.FC<{
    children: ReactNode
}> = ({children}) => {
    const ShadowRightButton = styled(CircleStyled)`
      border: none;
      width: 40px;
      height: 40px;
      box-shadow: 0 0 15px 0 rgba(56, 119, 238, 0.1);
    `;

    return (
        <div>
            <ShadowRightButton>
                {children}
            </ShadowRightButton>
        </div>
    );
};

export default ShadowButton;