import React from 'react';
import {
    Container,
    Content,
    TitleDiv,
    TitleSpan,
    WrapperInner,
    WrapperStyled,
    YearsAndStages
} from "@composite/Wrappers/DesktopWrapper/DesktopWrapper";
import EventInfoBlockMobile from "@components/EventInfoBlock/EventInfoBlockMobile";
import styled from "styled-components";
import Years from "@composite/Years/Years";

const HrStyled = styled.hr`
  margin: 0;
  width: 280px;
  align-self: center;
`;
const MobileWrapper = () => {

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
                        </YearsAndStages>
                        <HrStyled/>
                        <EventInfoBlockMobile/>
                    </Content>
                </Container>
            </WrapperInner>
        </WrapperStyled>
    );
};

export default MobileWrapper;