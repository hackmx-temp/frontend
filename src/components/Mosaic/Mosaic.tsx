import React, { useState } from "react";
import { Box, IconButton, ImageList, ImageListItem, Stack, Typography } from "@mui/material"
import { previousHacksImgs } from "./types"
import theme from "../../theme/theme";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { ArrowButton, Header, HeaderContainer } from "./styles";

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const Mosaic = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentClient, setCurrentClient] = useState(null);
    const [visibleImages, setVisibleImages] = useState<any[]>([]);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    const handlePrevClick = () => {
        setCurrentPage((prevPage) =>
            prevPage === 0 ? previousHacksImgs.length - 5 : prevPage - 5
        );
    };

    const handleNextClick = () => {
        setCurrentPage((prevPage) => (prevPage + 5) % previousHacksImgs.length);
    };

    const handleImageClick = (client: any) => {
        setCurrentClient(client);
        setModalOpen(true);
    };

    React.useEffect(() => {
        // Function to update the number of visible images based on screen size
        const updateVisibleImages = () => {
            let numVisibleImages = 5; // Default number of visible images

            const startImageIndex = currentPage;
            const visibleImages = [];

            for (let i = 0; i < numVisibleImages; i++) {
                const imageIndex = (startImageIndex + i) % previousHacksImgs.length;
                visibleImages.push(previousHacksImgs[imageIndex]);
            }

            setVisibleImages(visibleImages);
        };

        // Attach a resize event listener to update the number of visible images
        window.addEventListener("resize", updateVisibleImages);

        // Initial update
        updateVisibleImages();

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", updateVisibleImages);
        };

    }, [currentPage, windowWidth]);

    return (
        <>
            <Box>
                <HeaderContainer>
                    <Header>Descubre nuestros Hacks pasados</Header>
                </HeaderContainer>
                {/* <Typography sx={{ textAlign: 'center' }} bgcolor={theme.color.mainBlue} pt={1} pb={1} color={theme.color.white} variant="h2">Hacks anteriores</Typography> */}
                <Stack textAlign='center' display='flex' flexDirection='row' position='relative' justifyContent='center'>
                    <ArrowButton onClick={handlePrevClick} left>
                        <IconButton
                            sx={{
                                background: theme.color.white,
                                opacity: 0.8,
                                transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                                '&:hover': {
                                    background: theme.color.white,
                                    opacity: 1,
                                    transform: 'scale(1.05)',
                                },
                            }}
                        >
                            <ArrowBackIosNew style={{ color: "black", fontSize: 15 }} />
                        </IconButton>
                    </ArrowButton>
                    <ImageList variant="quilted" cols={windowWidth < 768 ? 2 : 4} gap={0} rowHeight={250} sx={{ margin: 0, position: "relative" }}>
                        {
                            visibleImages.map((item) => (
                                <ImageListItem cols={item.cols || 1} rows={item.rows || 1}>
                                    <img
                                        {...srcset(item.img, 200, item.rows, item.cols)}
                                        alt={item.title}
                                    />
                                </ImageListItem>
                            ))
                        }
                    </ImageList>
                    <ArrowButton onClick={handleNextClick} right>
                        <IconButton
                            sx={{
                                background: theme.color.white,
                                opacity: 0.8,
                                transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                                '&:hover': {
                                    background: theme.color.white,
                                    opacity: 1,
                                    transform: 'scale(1.05)',
                                },
                            }}
                        >
                            <ArrowForwardIos style={{ color: "black", fontSize: 15 }} />
                        </IconButton>
                    </ArrowButton>
                </Stack>
            </Box>
        </>
    )
}

export default Mosaic