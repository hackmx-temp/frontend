export interface CarouselProps {
  /**
   * Image Array
   */
  clients: {
    src: string;
    alt: string;
    client: string;
    projectDescription?: string;
    images?: string[];
    socialMedias?: SocialMedia[];
  }[];
  /**
   * Height of the carousel
   */
  height?: string;

  /**
   * Width of the carousel
   */
  width?: string;

  /**
   * Width of the carousel
   */
  imageWidth?: string;
}

export interface ImageProps {
  onClick?: () => void;
}

export interface SocialMedia {
  username: string;
  icon: string;
  url?: string;
  challenge?: string;
}