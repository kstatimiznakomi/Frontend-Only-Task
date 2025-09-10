import React, {useEffect, useRef, useState} from 'react';
import NumberCircle from "@components/Buttons/NumberCircle/NumberCircle";
import styled from "styled-components";
import {stageStore} from "@/store/stageStore";
import gsap from "gsap";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {DATES_AND_EVENTS_COUNT} from "@constants/dates";
import SmallCircle from "@components/Buttons/SmallCircle/SmallCircle";
import {polarToCartesian} from "@/utils/utils";

const StagesOnCircle = styled.div`
  position: relative;
  border-radius: 100%;
  width: 530px;
  height: 530px;
  border: solid 1px rgb(66, 86, 122, 0.2);
  margin-left: var(--margin-80);
`;

const ButtonWrapper = styled.div<{ current: boolean }>`
  width: 56px;
  height: 56px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: ${({current}) => current ? 'flex-start' : 'center'};
`;

const StagesList: React.FC<{
    stages: number[]
}> = ({stages}) => {
    gsap.registerPlugin(MotionPathPlugin);

    const refs = useRef<HTMLDivElement[]>([]);
    const radius = 265;
    const center = radius;
    const {stage} = stageStore.getState().stager;
    const [currentStage, setCurrentStage] = useState(stage);

    const step = 360 / DATES_AND_EVENTS_COUNT;
    let diffCurrentAndStart = stage - 3;

    const offsetAngle = diffCurrentAndStart * step;

    useEffect(() => {
        stages.forEach((num, i) => {
            const angle = i * step - offsetAngle;
            const {x, y} = polarToCartesian(center, radius, angle);

            const el = refs.current[i];
            if (el) {
                gsap.set(el, {
                    x: x - 27,
                    y: y - 27,
                });
            }
        });
    }, [stages]);

    useEffect(() => {
        const unsubscribe = stageStore.subscribe(() => {
            const {stage, prevStage} = stageStore.getState().stager;

            setCurrentStage(stage);

            refs.current.forEach((el, i) => {
                if (el) {
                    gsap.to(
                        {angle: (i - prevStage) * step - 180},
                        {
                            angle: (i - stage) * step - 180,
                            duration: 0.6,
                            ease: "power1.inOut",
                            onUpdate: function () {
                                const {x, y} = polarToCartesian(center, radius, this.targets()[0].angle);
                                gsap.set(el, {x: x - 27, y: y - 27});
                            }
                        }
                    );
                }
            });
        });

        return unsubscribe;
    }, [stages]);


    return (
        <StagesOnCircle>
            {
                stages.map((_, i) => (

                        <ButtonWrapper
                            current={_ === currentStage}
                            key={_}
                            ref={(el: HTMLDivElement) => {
                                if (el) {
                                    refs.current[i] = el;
                                }
                            }}
                        >
                            {

                                _ === currentStage ?

                                    <NumberCircle number={_}/>
                                    :
                                    <SmallCircle stage={_}/>
                            }
                        </ButtonWrapper>

                    )
                )
            }
        </StagesOnCircle>
    );
};

export default StagesList;