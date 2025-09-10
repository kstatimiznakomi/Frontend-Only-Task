import React from 'react';
import {CircleStyled} from "@components/Buttons/BaseCircle/Circle";
import styled from "styled-components";
import {DATES_AND_EVENTS} from "@constants/dates";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const NumberCircleStyle = styled(CircleStyled)`
  width: var(--button-number-size);
  height: var(--button-number-size);
  border: solid 1px var(--button-number-border);
  cursor: default;
`;

export const NumberStyle = styled.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #42567a;
`;

export const TypeStyle = styled(NumberStyle)`
  font-weight: 700;
`;

const NumberCircle: React.FC<{
    number: string | number,
}> = ({number, ...props}) => {
    const stageType = DATES_AND_EVENTS.filter((item) => item.stage === number)[0].type;

    return (
        <Wrapper {...props}>
            <NumberCircleStyle>
                <NumberStyle>{number}</NumberStyle>
            </NumberCircleStyle>
            <TypeStyle>
                {stageType}
            </TypeStyle>
        </Wrapper>
    );
};

export default NumberCircle;