import React from "react";
import { Button } from "@mui/material";
import { ButtonMuiProp } from "./types";

const ExampleMui: React.FC<ButtonMuiProp> = ({
  bgColor,
  color,
  hoverColor,
  children,
}) => {
  return (
    <Button
      sx={{
        backgroundColor: bgColor,
        color: color,
        "&:hover": {
          backgroundColor: hoverColor,
        },
      }}
    >
      {children}
    </Button>
  );
};

export default ExampleMui;
