import React, { useState } from "react";
import { Box, IconButton, ImageList, ImageListItem, Stack, Typography } from "@mui/material"
import { previousHacksImgs } from "./types"
import theme from "../../theme/theme";
import { ArrowButton } from "../Carousel/styles";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const ImageMosaic = () => {

    const [currentPage, setCurrentPage] = useState(0);

    const handlePrevClick = () => {
        console.log("prev");
    };

    const handleNextClick = () => {
        console.log("next");
    };
    
    return (
        <>
            <Box>
                <ArrowButton onClick={handlePrevClick} left>
                    <IconButton>
                        <ArrowBackIosNew style={{ color: "black", fontSize: 15 }} />
                    </IconButton>
                </ArrowButton>
                <Stack textAlign='center'>
                    <Typography bgcolor={theme.color.primary} pt={1} pb={1} color={theme.color.white} variant="h2">Hacks anteriores</Typography>
                    <ImageList variant="quilted" cols={4} gap={0} rowHeight={250} sx={{ margin: 0 }}>
                        {
                            previousHacksImgs.map((item) => (
                                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                    <img
                                        {...srcset(item.img, 200, item.rows, item.cols)}
                                        alt={item.title}
                                    />
                                </ImageListItem>
                            ))
                        }
                    </ImageList>
                </Stack>
            </Box>
            <ArrowButton onClick={handleNextClick} right>
                <IconButton>
                    <ArrowForwardIos style={{ color: "black", fontSize: 15 }} />
                </IconButton>
            </ArrowButton>
        </>
    )
}

export default ImageMosaic