import React from "react";
import styled from "styled-components";
import Info from "@components/Info/Info";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {EventType} from "@/types/types";
import {useMediaQuery} from "react-responsive";

const EventsStyle = styled.div`
  overflow: hidden;
  max-width: 1200px;
  display: flex;
  gap: 2em;
  @media (max-width: 320px) {
    max-width: 320px;
    margin-left: 1.25rem;
  }
`;
const EventListContainer: React.FC<{
    events: EventType[];
}> = (({events}) => {
    const isMobile = useMediaQuery({maxWidth: 320});
    if (!events) return <div>История пуста</div>;

    return (
        <EventsStyle>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={100}
                slidesPerView={3}
                navigation={!isMobile}
                pagination={isMobile ? {
                    clickable: true,
                    el: '.swiper-pagination',
                    type: 'bullets',
                } : false}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
                    768: {slidesPerView: 2},
                    1024: {slidesPerView: 3},
                }}
            >
                {
                    events.map((event) => (
                        <SwiperSlide key={event.year}>
                            <Info key={event.year} {...event} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </EventsStyle>
    );
});

export default EventListContainer;