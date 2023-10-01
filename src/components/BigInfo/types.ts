import { ReactNode } from "react";

export interface BigInfoProps {
  /**
   * Side for the image content
   */
  side: "left" | "right";
  /**
   * Side for the image content
   */
  imgSrc: string;
  /**
   * Children for the card content
   */
  children: ReactNode;

  /**
   * Background color for the card
   */
  bgColor: string;
}
