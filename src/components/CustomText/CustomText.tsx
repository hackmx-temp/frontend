import React from 'react'
import { CustomTextProps } from './types'
import { BreakLine, ShowDescription } from './styles';

const CustomText: React.FC<CustomTextProps> = ({ color = "black", content, alignment = "left", fontSize = "1.3rem"}) => {
    const parts = content.split(/(\[.*?\]|\r?\n)/);
  
    return (
      <ShowDescription textAlign={alignment} fontSize={fontSize}>
        {parts.map((part, index) => {
          if (part === "\n" || part === "\r\n") {
            return <BreakLine key={index} />;
          } else if (part.startsWith("[") && part.endsWith("]")) {
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