import { Button } from '@mui/material';
import styled, { keyframes } from 'styled-components';
import theme from '../../theme/theme';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const BannerContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
`;

export const Image = styled.img`
    animation: ${fadeIn} 1.5s ease-in-out forwards;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const StyledButton = styled.button`
    background-color: ${theme.color.primary};
    border: none;
    border-radius: 10px;
    color: ${theme.color.white};
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
    height: 50px;
    margin: 0 auto;
    padding: 0;
    text-transform: uppercase;
    width: 200px;
    animation: ${fadeIn} 1.5s ease-in-out forwards;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);

    transition: width 0.3s ease, height 0.3s ease, font-size 0.3s ease;
    &:hover {
        background-color: #114880;
        width: 210px;
        height: 55px;
        font-size: 1.3rem;

        @media (max-width: 390px) {
            width: 135px;
            height: 35px;
            font-size: 0.8rem;
        }
    }

    @media (max-width: 390px) {
        width: 130px;
        height: 30px;
        font-size: 0.7rem;
    }
`;