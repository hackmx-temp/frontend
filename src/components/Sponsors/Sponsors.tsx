import React, { useEffect, useState, useRef } from 'react'
import { Carousel } from '../Carousel'
import awsLogo from "../../Assets/sponsors/aws.png";
import dacompassLogo from "../../Assets/sponsors/dacompass.png";
import liverpoolLogo from "../../Assets/sponsors/liverpool.png";
import laModernaLogo from "../../Assets/sponsors/laModerna.png";
import { Header, Wrapper } from './styles';

const Sponsors = () => {
    const [isSponsorVisible, setIsSponsorVisible] = useState(false);
    const sponsorsWrapper = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleScrollSponsors = () => {
            console.log("handleScrollSponsors");
            if (sponsorsWrapper.current) {
                console.log("sponsorsWrapper.current");
                const rect = sponsorsWrapper.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
                if (rect.top <= viewportHeight && rect.bottom >= 0) {
                    if (!isSponsorVisible) {
                        setIsSponsorVisible(true);
                    }
                } else {
                    if (rect.bottom < 0 || rect.top > viewportHeight) {
                        setIsSponsorVisible(false);
                    }
                }
            }

            window.addEventListener('scroll', handleScrollSponsors);
            handleScrollSponsors();

            return () => {
                window.removeEventListener('scroll', handleScrollSponsors);
            };
        };
    }, [isSponsorVisible]);

    return (
        <Wrapper ref={sponsorsWrapper} isVisible={true}>
            <Header>Conoce a nuestros patrocinadores</Header>
            <Carousel
                clients={[
                    {
                        src: awsLogo,
                        alt: "AWS",
                        client: "Client 1",
                    },
                    {
                        src: dacompassLogo,
                        alt: "Dacompass",
                        client: "Client 1",
                    },
                    {
                        src: liverpoolLogo,
                        alt: "Liverpool",
                        client: "Client 1",
                    },
                    {
                        src: laModernaLogo,
                        alt: "La Moderna",
                        client: "Client 1",
                    },
                ]}
                width="100%"
                imageWidth="150px"
            />
        </Wrapper>
    )
}

export default Sponsors