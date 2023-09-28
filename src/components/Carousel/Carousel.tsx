import React, { useState } from 'react';
import { CarouselContainer, ImagesWrapper, ImageContainer, Image, ArrowButton, CirclesContainer, Circle, BottomCarousel, TopCarousel } from './styles';
import { CarouselProps } from './types';
import { IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { BasicModal } from '../BasicModal';

const Carousel: React.FC<CarouselProps> = ({
    clients,
    width = '100%',
    height = 'auto',
    imageWidth = '200px',
}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentClient, setCurrentClient] = useState(null);
    const [visibleImages, setVisibleImages] = useState<any[]>([]);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    const handlePrevClick = () => {
        setCurrentPage((prevPage) => (prevPage === 0 ? clients.length - 1 : prevPage - 1));
    };

    const handleNextClick = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % clients.length);
    };

    const handleImageClick = (client: any) => {
        setCurrentClient(client);
        setModalOpen(true);
    }

    React.useEffect(() => {
        // Function to update the number of visible images based on screen size
        const updateVisibleImages = () => {
            let numVisibleImages = 4; // Default number of visible images

            // Adjust the number of visible images based on screen size
            if (windowWidth < 768) {
                numVisibleImages = 2; // For smaller screens
            } else if (windowWidth < 1024) {
                numVisibleImages = 3; // For medium screens
            }

            const startImageIndex = currentPage;
            const visibleImages = [];

            for (let i = 0; i < numVisibleImages; i++) {
                const imageIndex = (startImageIndex + i) % clients.length;
                visibleImages.push(clients[imageIndex]);
            }

            setVisibleImages(visibleImages);
        };

        // Attach a resize event listener to update the number of visible images
        window.addEventListener('resize', updateVisibleImages);

        // Initial update
        updateVisibleImages();

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', updateVisibleImages);
        };
    }, [clients, windowWidth, currentPage]);

    return (
        <CarouselContainer height={height} width={width}>
            <TopCarousel>
                <ArrowButton onClick={handlePrevClick} left>
                    <IconButton>
                        <ArrowBackIosNew style={{ color: 'black', fontSize: 15 }} />
                    </IconButton>
                </ArrowButton>
                <ImagesWrapper height={height}>
                    {visibleImages.map((client, index) => (
                        <ImageContainer imageWidth={imageWidth} height={height}>
                            <Image
                                key={index}
                                src={client.src}
                                alt={client.alt}
                                onClick={() => handleImageClick(client)}
                            />
                        </ImageContainer>
                    ))}
                </ImagesWrapper>
                <ArrowButton onClick={handleNextClick} right>
                    <IconButton>
                        <ArrowForwardIos style={{ color: 'black', fontSize: 15 }} />
                    </IconButton>
                </ArrowButton>
            </TopCarousel>
            <BottomCarousel>
                <CirclesContainer>
                    {clients.map((_, index) => (
                        <Circle key={index} active={index === currentPage} style={{ fontSize: 9 }} />
                    ))}
                </CirclesContainer>
            </BottomCarousel>
            {currentClient && (
                <BasicModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    client={currentClient}
                />
            )}
        </CarouselContainer>
    );
};

export default Carousel;
