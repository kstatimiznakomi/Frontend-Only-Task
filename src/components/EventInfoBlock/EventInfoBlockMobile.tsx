import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/store/stageStore";
import {DATES_AND_EVENTS, DATES_AND_EVENTS_COUNT} from "@constants/dates";
import SliderButtons from "@composite/SliderButtons/SliderButtons";
import EventListContainer from "@containers/EventListContainer/EventListContainer";
import {EventToNext, NumberOfPoint, Points} from "@components/EventInfoBlock/EventInfoBlock";

const EventInfoBlockMobile: React.FC = () => {
    const stage = useSelector((stageStore: RootState) => stageStore.stager.stage);

    return (
        <>
            <EventToNext>
                <EventListContainer events={DATES_AND_EVENTS.filter((item) => item.stage === stage)[0].events}/>
            </EventToNext>
            <Points>
                <NumberOfPoint>
                    {`0${stage}/0${DATES_AND_EVENTS_COUNT}`}
                </NumberOfPoint>
                <SliderButtons/>
            </Points>
        </>
    );
};

export default EventInfoBlockMobile;