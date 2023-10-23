import React, { useEffect, useState, useRef } from 'react'
import { Carousel } from '../Carousel'
import awsLogo from "../../assets/sponsors/aws.png";
import dacompassLogo from "../../assets/sponsors/dacompass.png";
import liverpoolLogo from "../../assets/sponsors/liverpool.png";
import laModernaLogo from "../../assets/sponsors/laModerna.png";
import { Header, Wrapper } from './styles';
import facebookLogo from "../../assets/socialMedias/facebook.png";
import instagramLogo from "../../assets/socialMedias/instagram.png";
import linkedInLogo from "../../assets/socialMedias/linkedin.png";
import xLogo from "../../assets/socialMedias/x.png";
import websiteLogo from "../../assets/socialMedias/website.png";

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
                        client: "AWS",
                        projectDescription: "Proporciona servicios de computación en la nube escalables y flexibles para empresas y desarrolladores de todo el mundo.",
                        socialMedias: [
                            {
                                username: "AMAZONWEBSERVICES",
                                icon: facebookLogo,
                                url: "https://www.facebook.com/amazonwebservices.latam/?brand_redir=153063591397681",
                                challenge: ""
                            },
                            {
                                username: "AMAZONWEBSERVICES",
                                icon: instagramLogo,
                                url: "https://www.instagram.com/amazonwebservices/",
                                challenge: ""
                            },
                            {
                                username: "AWS",
                                icon: xLogo,
                                url: "https://twitter.com/AWS",
                                challenge: ""
                            },
                            {
                                username: "AWS.AMAZON.COM",
                                icon: websiteLogo,
                                url: "https://aws.amazon.com",
                                challenge: ""
                            },
                        ]
                    },
                    {
                        src: dacompassLogo,
                        alt: "dacompass",
                        client: "dacompass",
                        projectDescription: "Es una empresa que ofrece servicios tecnológicos a la medida. Como integración de software personalizado, consultoría, análisis de datos y soporte técnico.",
                        socialMedias: [
                            {
                                username: "DACOMPASS",
                                icon: facebookLogo,
                                url: "https://www.facebook.com/dacompass.io",
                            },
                            {
                                username: "DACOMPASS",
                                icon: instagramLogo,
                                url: "https://www.instagram.com/dacompass.io"
                            },
                            {
                                username: "DACOMPASS",
                                icon: linkedInLogo,
                                url: "https://www.linkedin.com/company/dacompass/",
                            },
                            {
                                username: "DACOMPASS",
                                icon: websiteLogo,
                                url: "https://dacompass.io/",
                            },
                        ]
                    },
                    {
                        src: laModernaLogo,
                        alt: "La Moderna",
                        client: "La Moderna",
                        projectDescription: "Es una empresa líder en la producción y distribución de productos alimenticios, comprometida con la calidad y la innovación para statisfacer las necesidades de sus clientes.",
                        socialMedias: [
                            {
                                username: "LA MODERNA",
                                icon: facebookLogo,
                                url: "https://www.facebook.com/pastaslamoderna",
                            },
                            {
                                username: "LAMODERNA_MX",
                                icon: instagramLogo,
                                url: "https://www.instagram.com/lamoderna_mx/"
                            },
                            {
                                username: "PASTA LA MODERNA",
                                icon: xLogo,
                                url: "https://twitter.com/lamodernamx?lang=en",
                            },
                            {
                                username: "LAMODERNA.COM.MX",
                                icon: websiteLogo,
                                url: "https://www.lamoderna.com.mx",
                            },
                        ]
                    },
                    {
                        src: liverpoolLogo,
                        alt: "El puerto de Liverpool",
                        client: "El puerto de Liverpool",
                        projectDescription: "Es una reconocida cadena de tiendas departamentales, que ofrece a sus clientes una extensa gama de productos que incluyen ropa de moda, electrónicos, muebles y artículos para el hogar, brindando una experiencia de compra integral y variada",
                        socialMedias: [
                            {
                                username: "LIVERPOOL",
                                icon: facebookLogo,
                                url: "https://www.facebook.com/liverpoolmexico",
                            },
                            {
                                username: "LIVERPOOL_MEXICO",
                                icon: instagramLogo,
                                url: "https://www.instagram.com/liverpool_mexico/"
                            },
                            {
                                username: "LIVERPOOL MEXICO",
                                icon: xLogo,
                                url: "https://twitter.com/liverpoolmexico",
                            },
                            {
                                username: "ELPUERTODELIVERPOOL.MX",
                                icon: websiteLogo,
                                url: "https://www.liverpool.com.mx",
                            },
                        ]
                    },
                ]}
                width="100%"
                imageWidth="150px"
            />
        </Wrapper>
    )
}

export default Sponsors