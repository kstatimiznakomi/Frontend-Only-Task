import React from 'react';
import {SliderButtonStyle} from "@components/Buttons/SliderButtons/SliderButton";
import {AppDispatch, RootState, set} from "@/store/stageStore";
import {useDispatch, useSelector} from "react-redux";
import {useMediaQuery} from "react-responsive";

const LeftButton = () => {
    const isMobile = useMediaQuery({maxWidth: 320});
    const dispatch = useDispatch<AppDispatch>();
    const stage = useSelector((stageStore: RootState) => stageStore.stager.stage);

    return (
        <SliderButtonStyle disabled={stage <= 1} onClick={() => dispatch(set(stage - 1))}
                           children={
                               isMobile ? <svg width="6" height="8" viewBox="0 0 6 8" fill="none"
                                               xmlns="http://www.w3.org/2000/svg">
                                       <path d="M4.7489 1.04178L1.6239 4.16678L4.7489 7.29178" stroke="#42567A"
                                             strokeWidth="2"/>
                                   </svg> :
                                   <svg width="10" height="14" viewBox="0 0 10 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                       <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A"/>
                                   </svg>
                           }/>
    );
};

export default LeftButton;