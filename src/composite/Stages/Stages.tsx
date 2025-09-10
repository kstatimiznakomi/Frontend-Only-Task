import React, {useRef} from 'react';
import styled from "styled-components";
import {DATES_AND_EVENTS} from "@constants/dates";
import StagesListNumber from "@containers/StagesList/StagesListNumber";

const StagesStyle = styled.div`
  z-index: 5;
  align-self: center;
  position: fixed;
`;
const Stages = () => {
    const stagesRef = useRef<HTMLDivElement>(null);
    if (stagesRef.current) {
        stagesRef.current.style.transform = "rotate(40deg)";
    }


    return (
        <StagesStyle>
            {
                <StagesListNumber ref={stagesRef} stages={DATES_AND_EVENTS.map((stage) => stage.stage)}/>
            }
        </StagesStyle>
    );
};

export default Stages;