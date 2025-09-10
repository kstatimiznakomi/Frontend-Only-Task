import React, {useEffect, useRef, useState} from 'react';
import SliderButtons from "@/composite/SliderButtons/SliderButtons";
import EventListContainer from "@containers/EventListContainer/EventListContainer";
import {DATES_AND_EVENTS, DATES_AND_EVENTS_COUNT} from "@constants/dates";
import styled from "styled-components";
import {RootState} from "@/store/stageStore";
import {useSelector} from "react-redux";
import gsap from "gsap";

export const Points = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 320px) {
    gap: 0.625rem;
    margin-left: 1.25rem;
  }
`;

export const EventToNext = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-top: 3.5rem;
  margin-bottom: 6.5rem;

  @media (max-width: 320px) {
    margin-top: 1.25rem;
    margin-bottom: 4.875rem;
  }
`;

export const NumberOfPoint = styled.span`
  font-family: var(--font-family);
  font-weight: bold;
  color: #42567a;
`;
const EventInfoBlock: React.FC = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const reduxStage = useSelector((state: RootState) => state.stager.stage);
    const [currentStage, setCurrentStage] = useState(reduxStage);


    useEffect(() => {
        if (!divRef.current) {
            setCurrentStage(reduxStage);
            return;
        }

        gsap.to(divRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                setCurrentStage(reduxStage);

                gsap.fromTo(
                    divRef.current,
                    {opacity: 0},
                    {opacity: 1, duration: 0.5}
                );
            }
        });
    }, [reduxStage]);

    return (
        <>
            <Points>
                <NumberOfPoint>
                    {`0${currentStage}/0${DATES_AND_EVENTS_COUNT}`}
                </NumberOfPoint>
                <SliderButtons/>
            </Points>
            <EventToNext ref={divRef}>
                <EventListContainer
                    events={DATES_AND_EVENTS.filter((item) => item.stage === currentStage)[0].events}/>
            </EventToNext>
        </>
    );
};

export default EventInfoBlock;