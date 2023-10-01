import styled, { css } from 'styled-components';
import { FiberManualRecord } from '@mui/icons-material';

export const ImageContainer = styled.div<{ height: string, width: string, maxWidth?: string }>`
  display: flex;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "unset")};
  width: ${({ width }) => (width ? width : "unset")};
  height: ${({ height }) => height};
  transition: transform 0.3s ease;
  position: relative;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const ArrowButton = styled.button<{ left?: boolean; right?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  transition: opacity 0.3s;
  opacity: 0;

  ${({ left }) =>
    left &&
    css`
      left: 20px;
      z-index: 100;
    `}

  ${({ right }) =>
    right &&
    css`
      right: 20px;
    `}

`;

export const GalleryContainer = styled.div<{ height: string, width?: string, maxWidth?: string }>`
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "unset")};
  width: ${({ width }) => (width ? width : "unset")};
  height: ${({ height }) => height};
  overflow: hidden;
  position: relative;
  border-radius: 12px;

  &:hover ${ArrowButton} {
    opacity: 1;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CirclesContainer = styled.div`
  position: absolute; 
  bottom: 10px; 
  left: 0; 
  right: 0; 
  display: flex;
  justify-content: center;
`;

export const Circle = styled(FiberManualRecord)<{ active: boolean }>`
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  margin: 0 2px;
  color: #fff;
`;

