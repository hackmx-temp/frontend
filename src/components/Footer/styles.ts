import styled from "styled-components";
import theme from "../../theme/theme";

export const FooterWrapper = styled.div`
  background-color: #1e1f26;
  width: 100%;
  padding: 2em 0;
  margin-bottom: 0px;
  font-family: "Popins", sans-serif;
`;

export const FooterContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

export const FooterUpperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 4em;
`;

export const FooterLogoImgContainer = styled.div`
  margin: 1em 0 1em 1em;
`;

export const FooterLogoImg = styled.img`
  width: 80px;
  height: auto;
`;

export const FooterLinkWrapper = styled.div``;

export const FooterLinkContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FooterLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${theme.color.grays.d1};
  margin: 1em;
  font-size: 1em;

  &:hover {
    color: ${theme.color.accent};
    transition: color 0.4s ease;
  }
`;

export const FooterBelowContainer = styled.div``;

export const FooterDivider = styled.hr`
  border: none;
  height: 1px;
  background-color: #3a3b43;
`;

export const FooterCopyrightContainer = styled.div`
  color: #a0a2aa;
  text-align: left;
  display: flex;
  align-items: flex-start;
  @media (max-width: 1024px) {
    margin-top: 1rem;
  }
`;

export const FooterCopyrightIcon = styled.div``;

export const FooterCopyrightText = styled.div`
  color: #a0a2aa;
  text-align: left;
  font-size: 0.8em;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: -0.5em;

  &:hover {
    cursor: pointer;
  }
`;

export const TextContainer = styled.div`
  display: inline-block;
  margin: 1em 1em 1em 0;
`;
