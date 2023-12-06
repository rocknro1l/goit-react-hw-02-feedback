import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonStyle = styled.button`
  border-radius: 10px;
  color: white;
  transition: 0.2s linear;
  background: #0b63f6;
  &:hover {
    background: #003cc5;
    box-shadow: none;
    position: relative;
    top: 5px;
  }
`;
