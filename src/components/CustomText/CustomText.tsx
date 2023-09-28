import React from 'react'
import { CustomTextProps } from './types'
import { BreakLine, ShowDescription } from './styles';

const CustomText: React.FC<CustomTextProps> = ({ color = "black", content }) => {
    const parts = content.split(/(\[.*?\]|\r?\n)/);
  
    return (
      <ShowDescription>
        {parts.map((part, index) => {
          if (part === "\n" || part === "\r\n") {
            // Renderizar salto de línea
            return <BreakLine key={index} />;
          } else if (part.startsWith("[") && part.endsWith("]")) {
            // Resaltar las palabras importantes usando CSS o estilos personalizados
            return (
              <span key={index} style={{ color: color, fontWeight: "bold" }}>
                {part.slice(1, -1)}
              </span>
            );
          } else {
            return <span key={index}>{part}</span>;
          }
        })}
      </ShowDescription>
    );
  };

export default CustomText