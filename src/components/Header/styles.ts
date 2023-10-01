import styled from 'styled-components';

export const HeaderLogoImgContainer = styled.div`
  margin: 1em 0 1em 1em;
`;

export const HeaderLogoImg = styled.img<{size?: string}>`
    width: ${({ size }) => size === 'small' ? '80px' : '200px'};
    height: auto;
`;