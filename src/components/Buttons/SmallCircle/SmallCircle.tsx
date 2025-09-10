import React, {forwardRef, useRef} from 'react';
import styled from "styled-components";
import gsap from "gsap";
import {useDispatch} from "react-redux";
import {AppDispatch, set} from "@/store/stageStore";
import {NumberCircleStyle, NumberStyle} from "@components/Buttons/NumberCircle/NumberCircle";

const SmallButtonWrapper = styled.div`
  position: absolute;
  width: var(--small-button-number-size);
  height: var(--small-button-number-size);
  display: flex;
  align-items: center;
  justify-items: center;
`;

const SmallCircleStyle = styled(NumberCircleStyle)`
  background-color: #42567a;
  width: 6px;
  height: 6px;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;
  }

  &:hover {
    &::before:hover {
      background: lightblue;
    }

    border: solid 1px var(--button-number-border);
    background-color: #f4f5f9;
  }
`;
const SmallCircle = forwardRef<HTMLButtonElement, { stage: number }>(
    ({stage, ...props}, ref) => {
        const buttonRef = useRef<HTMLButtonElement>(null);
        const textRef = useRef<HTMLSpanElement>(null);
        const expanded = useRef(false);
        const dispatch = useDispatch<AppDispatch>();

        const handleMouseEnter = () => {
            if (!buttonRef.current) return;
            gsap.to(buttonRef.current, {
                backgroundColor: "#f4f5f9",
                width: "56px",
                height: "56px",
                duration: 0.5,
                ease: "power3.out",
                transformOrigin: "50% 50%", // центр элемента
            });
            if (textRef.current) {
                textRef.current.textContent = String(stage);
            }
        };

        const handleMouseLeave = () => {
            expanded.current = false;
            if (!buttonRef.current) return;
            gsap.to(buttonRef.current, {
                backgroundColor: "#42567a",
                width: "6px",
                height: "6px",
                duration: 0.5,
                ease: "power3.out",
                transformOrigin: "50% 50%", // центр элемента
            });
            if (textRef.current) {
                textRef.current.textContent = '';
            }
        };

        return (
            <SmallCircleStyle ref={buttonRef} onClick={() => dispatch(set(stage))}
                              onMouseLeave={handleMouseLeave}
                              onMouseEnter={handleMouseEnter} {...props}>
                {
                    <NumberStyle ref={textRef}></NumberStyle>
                }
            </SmallCircleStyle>
        );
    });

export default SmallCircle;