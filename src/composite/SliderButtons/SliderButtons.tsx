import React from 'react';
import styled from "styled-components";
import LeftButton from "@components/Buttons/SliderButtons/LeftButton";
import RightButton from "@components/Buttons/SliderButtons/RightButton";

const SliderButtonsStyled = styled.div`
  display: flex;
  gap: 1.25rem;

  @media (max-width: 320px) {
    gap: 0.5rem
  }
`;
const SliderButtons = () => {

    return (
        <SliderButtonsStyled>
            <LeftButton/>
            <RightButton/>
        </SliderButtonsStyled>
    );
};

export default SliderButtons;