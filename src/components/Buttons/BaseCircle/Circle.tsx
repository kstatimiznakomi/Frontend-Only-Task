import React, {ReactNode} from 'react';
import styled from "styled-components";


export const CircleStyled = styled.button`
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform-origin: center center;
  background-color: var(--bg-white);

  &:disabled {
    cursor: default;
  }
`;
const Circle: React.FC<{
    children: ReactNode,
}> = ({children, ...props}) => {
    return (
        <div>
            <CircleStyled {...props}>
                {children}
            </CircleStyled>
        </div>
    );
};

export default Circle;