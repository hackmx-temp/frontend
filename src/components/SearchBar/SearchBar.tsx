import React, { useState } from "react";
import {
  SearchBarWrapper,
  AdditionalWrapper,
  ButtonContainer,
  SearchBarContainer,
  ButtonsContainer,
} from "./styles";
import { Clear, Search } from "@mui/icons-material";
import { TextField, InputAdornment, IconButton, Divider } from "@mui/material";
import { SearchBarProp } from "./types";
import { Button } from "@mui/material";

const SearchBar: React.FC<SearchBarProp> = ({
  label,
  searchClick,
  title,
  btnText,
  btnHandler,
  barType,
  clearStateText,
}) => {
  const handleClearText = () => {
    setSearchText("");
    if (clearStateText) {
      clearStateText("");
    }
  };

  const [searchText, setSearchText] = useState("");

  return (
    <>
      {barType === "normal" ? (
        <SearchBarWrapper>
          {!!title && (
            <AdditionalWrapper>
              {title}
              {!!btnText && (
                <ButtonContainer>
                  <Button variant="contained" sx={{ textTransform: "none" }}>
                    {btnText}
                  </Button>
                </ButtonContainer>
              )}
            </AdditionalWrapper>
          )}
          <SearchBarContainer>
            <TextField
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              fullWidth
              size="small"
              placeholder={label}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ButtonsContainer>
                      <IconButton onClick={handleClearText}>
                        <Clear />
                      </IconButton>
                      <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                      />
                      <IconButton
                        onClick={() => {
                          searchClick(searchText);
                        }}
                      >
                        <Search />
                      </IconButton>
                    </ButtonsContainer>
                  </InputAdornment>
                ),
              }}
            />
          </SearchBarContainer>
        </SearchBarWrapper>
      ) : (
        <TextField
          value={searchText}
          fullWidth
          onChange={(e) => setSearchText(e.target.value)}
          size="small"
          placeholder={label}
          InputProps={{
            style: {
              borderRadius: "15px",
              fontSize: "12px",
              backgroundColor: "#f8f8f8",
              top: "4px",
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    searchClick(searchText);
                  }}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    </>
  );
};

export default SearchBar;
