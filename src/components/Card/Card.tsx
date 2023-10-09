import React from 'react'
import { CustomText } from '../CustomText'
import { CardProps } from './types'
import { CardContainer, CardHeader, CardImage, CardImageContainer } from './styles'

const Card: React.FC<CardProps> = ({
  title = "Lorem ipsum dolor sit amet",
  description = `Lorem [ipsum dolor sit amet], consectetur adipiscing elit.`,
  image = "https://picsum.photos/200/300",
  accentColor = "black",
  width = "400px",
  height = "auto",
}) => {
  return (
    <CardContainer width={width} height={height}>
      <CardHeader>{title}</CardHeader>
      <CustomText
        content={description}
        alignment='center'
        color={accentColor}
        fontSize='1.2rem'
      />
      <CardImageContainer>
        <CardImage src={image} alt="" />
      </CardImageContainer>
    </CardContainer>
  )
}

export default Card