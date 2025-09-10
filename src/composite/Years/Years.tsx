import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {DATES_AND_EVENTS} from "@constants/dates";
import {stageStore} from "@/store/stageStore";
import gsap from "gsap";
import {TextPlugin} from "gsap/TextPlugin";

const YearsStyled = styled.div`
  align-self: center;
  display: flex;
  gap: 7.5rem;
  margin-top: 5.8125rem;
  margin-bottom: 8.5625rem;


  @media (max-width: 320px) {
    margin-top: 3.5rem;
    margin-bottom: 3.5625rem;
    gap: 2.125rem;
  }
`;

const YearTextStart = styled.span`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 200px;
  line-height: 80%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #5d5fef;

  @media (max-width: 320px) {
    font-size: 56px;
    color: #3877ee;
  }
`;

const YearTextEnd = styled(YearTextStart)`
  color: #ef5da8;
`;
const Years: React.FC = () => {
    const {stage} = stageStore.getState().stager;
    const [currentStage, setCurrentStage] = useState(stage);

    const years = DATES_AND_EVENTS.filter((item) => {
        return item.stage === currentStage;
    })[0].years;

    const [start, end] = years.split("-").map(Number);

    const startRef = useRef<HTMLSpanElement>(null);
    const endRef = useRef<HTMLSpanElement>(null);

    const prevStart = useRef(start);
    const prevEnd = useRef(end);

    gsap.registerPlugin(TextPlugin);

    useEffect(() => {
        const unsubscribe = stageStore.subscribe(() => {
            const {stage} = stageStore.getState().stager;
            setCurrentStage(stage);
        });
        return unsubscribe;
    }, []);

    useEffect(() => {
        // Анимация от старого к новому значению
        if (startRef.current) {
            gsap.fromTo(
                startRef.current,
                {innerText: prevStart.current},
                {innerText: start, duration: 1, snap: {innerText: 1}, ease: "power2.out"}
            );
        }

        if (endRef.current) {
            gsap.fromTo(
                endRef.current,
                {innerText: prevEnd.current},
                {innerText: end, duration: 1, snap: {innerText: 1}, ease: "power2.out"}
            );
        }

        prevStart.current = start;
        prevEnd.current = end;
    }, [start, end]);


    return (
        <YearsStyled>
            <div>
                <YearTextStart ref={startRef}>
                    {start}
                </YearTextStart>
            </div>
            <div>
                <YearTextEnd ref={endRef}>
                    {end}
                </YearTextEnd>
            </div>
        </YearsStyled>
    );
};

export default Years;