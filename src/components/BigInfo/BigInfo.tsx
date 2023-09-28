import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";
import { BigInfoProps } from "./types";

/**
 * Characteristics of card and cardmedia content
 */
const BigInfo: React.FC<BigInfoProps> = ({
  side,
  imgSrc,
  children,
  bgColor,
}) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        backgroundColor: bgColor,
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: side === "left" ? "row-reverse" : "row",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", sm: "50%" },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: "110%",
            // height: "auto",
          }}
          image={imgSrc}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", sm: "50%" },
        }}
      >
        <CardContent
          sx={{
            textAlign: { xs: "center", sm: side === "left" ? "left" : "right" },
            overflow: "auto",
          }}
        >
          {children}
        </CardContent>
      </Box>
    </Card>
  );
};

export default BigInfo;
