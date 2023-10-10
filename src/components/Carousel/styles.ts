import styled, { css } from "styled-components";
import { FiberManualRecord } from "@mui/icons-material";
import { ImageProps } from "./types";

export const CarouselContainer = styled.div<{ height: string; width: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  overflow: hidden;
  margin-bottom: 2rem;
`;

export const CarouselTitle = styled.h2`
  font-size: 48px;
  margin-bottom: 2rem;
  text-align: center;
  font-family: "Popins", sans-serif;
`;

export const TopCarousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  width: 80%;
  transition: transform 0.3s ease;
`;

export const BottomCarousel = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

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

export const ImagesWrapper = styled.div<{ height: string }>`
  height: ${({ height }) => height};
  transition: transform 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
  padding: 0 20px;

  @media (max-width: 768px) {
    height: 200px;
    gap: 40px;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    scroll-padding: 10px;

    &::-webkit-scrollbar {
      display: none;
    }

    & > * {
      scroll-snap-align: start;
    }

    & > *:last-child {
      margin-right: 0;
    }
  }
`;

export const ImageContainer = styled.div<{
  imageWidth: string;
  height: string;
}>`
  width: ${({ imageWidth }) => imageWidth};
  height: ${({ height }) => height};

  // @media (max-width: 768px) {
  //   width: 200px;
  //   height: 200px;
  // }
`;

export const Image = styled.img<ImageProps>`
  object-fit: cover;
  margin: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover {
    scale: 1.05;
    transition: scale 0.3s ease-in-out;
  }
`;

export const CirclesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Circle = styled(FiberManualRecord)<{ active: boolean }>`
  opacity: ${({ active }) => (active ? 1 : 0.1)};
  margin: 0 2px;
  color: #000;
`;
