import { Box, ImageList, ImageListItem, Stack, Typography } from "@mui/material"
import { previousHacksImgs } from "./types"

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

const previousHacks = () => {
    return (
        <Box>
            <Stack textAlign='center'>
                <Typography bgcolor='primary.main' color='common.white' variant="h2">Hacks anteriores</Typography>
                <ImageList variant="quilted" cols={4} gap={0} rowHeight={250} sx={{margin: 0}}>
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
    )
}

export default previousHacks