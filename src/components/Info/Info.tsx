import React from 'react';
import styled from "styled-components";
import {EventType} from "@/types/types";

const InfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 1.625rem;

  @media (max-width: 320px) {
    max-width: 10.375px;
  }
`;

const InfoYear = styled.span`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 25px;
  line-height: 120%;
  text-transform: uppercase;
  color: #3877ee;
`;

const InfoTitle = styled.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #42567a;
  max-height: 5.625rem;

  @media (max-width: 320px) {
    font-size: 14px;
    line-height: 145%;
    max-height: 5rem;
  }
`;
const Info: React.FC<EventType> = (event) => {

    return (
        <InfoStyled>
            <InfoYear>{event.year}</InfoYear>
            <InfoTitle>{event.event}</InfoTitle>
        </InfoStyled>
    );
};

export default Info;