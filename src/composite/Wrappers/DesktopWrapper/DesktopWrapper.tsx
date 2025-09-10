import React from 'react';
import {styled} from "styled-components";
import EventInfoBlock from "@components/EventInfoBlock/EventInfoBlock";
import Stages from "@composite/Stages/Stages";
import Years from "@composite/Years/Years";

export const Background = styled.div`
  z-index: -1;
  position: fixed;
  pointer-events: none;
  top: 0;
`;

export const YearsAndStages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: var(--margin-80);

  @media (max-width: 320px) {
    max-width: 280px;
    margin: 0;
  }
`

export const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (max-width: 320px) {
    max-width: 320px
  }
`;

export const WrapperInner = styled.div`
`;

export const TitleDiv = styled.div`
  border-left: solid 5px transparent;
  border-image: linear-gradient(to bottom, #3877EE, #EF5DA8) 1;
  margin-top: 11.0625rem;

  @media (max-width: 320px) {
    border: none;
    margin-top: 3.6875rem;
  }
`;

export const TitleSpan = styled.span`
  min-width: 350px;
  word-break: break-word;
  white-space: pre-wrap;
  display: block;
  max-width: 6.3rem;
  margin-left: var(--margin-80);
  text-indent: var(--margin-80) each-line;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  color: #42567a;
  @media (max-width: 320px) {
    word-break: break-word;
    white-space: pre-wrap;
    max-width: 6.3rem;
    font-weight: 700;
    line-height: 120%;
    text-indent: var(--margin-80) each-line;
    min-width: 150px;
    display: block;
    margin: 0;
    color: #42567a;
    font-size: 20px;
  }
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin-bottom: 35px;
`;
const DesktopWrapper: React.FC = () => {
    return (
        <WrapperStyled>
            <WrapperInner>
                <TitleDiv>
                    <TitleSpan>
                        Исторические даты
                    </TitleSpan>
                </TitleDiv>
                <Container>
                    <Content>
                        <YearsAndStages>
                            <Years/>
                            <Stages/>
                        </YearsAndStages>
                        <EventInfoBlock/>
                    </Content>
                </Container>
                <Background>
                    <svg width="1442" height="1080" viewBox="0 0 1442 1080"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.1" d="M1 0V1080" stroke="#42567A"/>
                        <path opacity="0.1" d="M721 0V1080" stroke="#42567A"/>
                        <path opacity="0.1" d="M1441 0V1080" stroke="#42567A"/>
                        <path opacity="0.1" d="M1 480H1441" stroke="#42567A"/>
                    </svg>
                </Background>
            </WrapperInner>
        </WrapperStyled>
    );
};

export default DesktopWrapper;