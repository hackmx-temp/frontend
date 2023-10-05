import styled from 'styled-components';

export const ArrowButton = styled.button<{ left?: boolean; right?: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 24px;
  transition: opacity 0.3s;
  opacity: 1;

  &:hover {
    opacity: 1;
  }
`;