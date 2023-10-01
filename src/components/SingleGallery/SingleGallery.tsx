import React, { useState, useRef } from 'react';
import { GalleryContainer, ImageContainer, Image, ArrowButton, CirclesContainer, Circle } from './styles';
import { SingleGalleryProps } from './types';
import { IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos, Opacity } from '@mui/icons-material';

const SingleGallery: React.FC<SingleGalleryProps> = ({
  images,
  width = "320px",
  maxWidth,
  height = "320px",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touchEndXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDeltaX = touchEndXRef.current - touchStartXRef.current;

    if (touchDeltaX > 50) {
      handlePrevClick();
    } else if (touchDeltaX < -50) {
      handleNextClick();
    }

    touchStartXRef.current = 0;
    touchEndXRef.current = 0;
  };

  return (
    <GalleryContainer height={height} width={width} maxWidth={maxWidth}>
      <ArrowButton onClick={handlePrevClick} left>
        <IconButton sx={{
          background: 'white',
          opacity: 0.8,
          transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
          '&:hover': {
            background: 'white',
            opacity: 1,
            transform: 'scale(1.05)',
          },
        }}>
          <ArrowBackIosNew style={{ color: 'black', fontSize: 15 }} />
        </IconButton>
      </ArrowButton>
      <ImageContainer
        height={height}
        width={width}
        maxWidth={maxWidth}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </ImageContainer>
      <ArrowButton onClick={handleNextClick} right>
        <IconButton sx={{
          background: 'white',
          opacity: 0.8,
          transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
          '&:hover': {
            background: 'white',
            opacity: 1,
            transform: 'scale(1.05)',
          },
        }}>
          <ArrowForwardIos sx={{ color: 'black', fontSize: 15 }} />
        </IconButton>
      </ArrowButton>
      <CirclesContainer>
        {images.map((_, index) => (
          <Circle key={index} active={index === currentIndex} style={{ fontSize: 9 }} />
        ))}
      </CirclesContainer>
    </GalleryContainer>
  );
};

export default SingleGallery;
