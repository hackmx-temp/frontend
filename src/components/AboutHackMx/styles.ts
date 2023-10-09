import styled from 'styled-components';
import theme from '../../theme/theme';

export const Wrapper = styled.div<{ isVisible: boolean }>`
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transform: translateY(${(props) => (props.isVisible ? 0 : '20px')});
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
    width: 100%;
    height: auto;
    background-color: ${theme.color.white};
`;

export const BasicContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10%;
    font-family: ${theme.typography.fontFamily};
`;

export const Header = styled.h2`
    font-weight: 300;
    font-size: 3.5rem;
    margin-bottom: 1rem;
    text-align: center;
    color: ${theme.color.mainBlue};
`;

export const CardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    padding: 2rem 10%;
    width: 100%;
    height: auto;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 2rem 0;
    }
`;

export const SmallHeader = styled.h3`
    font-weight: 600;
    margin: 0;
    margin-top: 1rem;
    font-size: 2rem;
    text-align: center;
    color: ${theme.color.mainBlue};
`;