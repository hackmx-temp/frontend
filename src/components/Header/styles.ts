import styled from "styled-components";

export const HeaderLogoImgContainer = styled.div`
  margin: 1em 0 1em 1em;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`;

export const HeaderLogoImg = styled.img<{ size?: string }>`
  width: ${({ size }) => (size === "small" ? "80px" : "200px")};
  height: auto;
  &:hover {
    transition: opacity 0.3s ease-in-out;
    opacity: 0.8;
  }
`;
