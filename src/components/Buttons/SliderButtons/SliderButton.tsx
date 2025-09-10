import React, {ReactNode} from 'react';
import styled from "styled-components";
import {CircleStyled} from "@components/Buttons/BaseCircle/Circle";

export const SliderButtonStyle = styled(CircleStyled)`
  width: 50px;
  height: 50px;
  border: solid 1px var(--button-slider-border);

  &:disabled {
    opacity: 0.2;
  }

  @media (max-width: 320px) {
    width: 25px;
    height: 25px;
  }
`;

const SliderButton: React.FC<{
    children: ReactNode,
}> = ({children, ...props}) => {

    return (<SliderButtonStyle {...props}>{children}</SliderButtonStyle>);
};

export default SliderButton;