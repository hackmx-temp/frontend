import { Link } from 'react-router-dom'
import { BannerContainer, Image, StyledButton } from './styles'
import theme from '../../theme/theme'

const RegistryBanner = () => {
    return (
        <BannerContainer>
            <Image src="/HACK2023INICIO.png" alt="Tu imagen" className="imagen-home" />
            <Link
                to="/registro"
                color={theme.color.white}
                style={{
                    textDecoration: "none",
                }}
            >
                <StyledButton>
                    Registrate
                </StyledButton>
            </Link>
        </BannerContainer >
    )
}

export default RegistryBanner