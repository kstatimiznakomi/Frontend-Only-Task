import React from 'react';
import {SliderButtonStyle} from "@components/Buttons/SliderButtons/SliderButton";
import {AppDispatch, RootState, set} from "@/store/stageStore";
import {useDispatch, useSelector} from "react-redux";
import {DATES_AND_EVENTS_COUNT} from "@constants/dates";
import {useMediaQuery} from "react-responsive";

const RightButton = () => {
    const isMobile = useMediaQuery({maxWidth: 320});
    const dispatch = useDispatch<AppDispatch>();
    const stage = useSelector((stageStore: RootState) => stageStore.stager.stage);

    return (
        <SliderButtonStyle disabled={stage >= DATES_AND_EVENTS_COUNT} onClick={() => dispatch(set(stage + 1))}
                           children={
                               isMobile ?
                                   <svg width="7" height="8" viewBox="0 0 7 8" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                       <path d="M1.58386 1.04178L4.70886 4.16678L1.58386 7.29178" stroke="#42567A"
                                             strokeWidth="2"/>
                                   </svg>
                                   :
                                   <svg width="10" height="14" viewBox="0 0 10 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                       <path d="M1.50012 0.750001L7.75012 7L1.50012 13.25" stroke="#42567A"/>
                                   </svg>
                           }/>
    );
};

export default RightButton;