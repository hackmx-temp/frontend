import styled from "styled-components";
import theme from "../../theme/theme";

export const PageWrapper = styled.div`
  margin: 0 10%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${theme.color.black};
`;

export const PageTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
`;

export const CustomInputLabel = styled.p`
  font-size: 26px;
  font-weight: bold;
  margin: 0;
`;

export const AddParticipantWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  margin: 15px 0 60px 0;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
`;