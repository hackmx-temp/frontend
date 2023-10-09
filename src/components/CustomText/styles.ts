import styled from "styled-components";

export const ShowDescription = styled.p<{ textAlign?: string, fontSize?: string }>`
  font-size: ${(props) => props.fontSize || "1.3rem"};
  font-weight: regular;
  margin: 15px 0 0 0;
  padding: 0;
  font-family: "Popins", sans-serif;
  text-align: ${(props) => props.textAlign || "left"};
`;

export const BreakLine = styled.div`
  margin-bottom: 0.5rem;
`;
