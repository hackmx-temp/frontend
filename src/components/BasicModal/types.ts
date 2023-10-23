export interface BasicModalProps {
    isOpen: boolean
    onClose: () => void
    client: {id: number, src: string, alt: string, client: string, projectDescription: string, images?: string[], socialMedias?: SocialMedia[], challenge?: string} 
}

export interface SocialMedia {
    username: string;
    icon: string;
    url?: string;
  }