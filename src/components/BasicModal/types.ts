export interface BasicModalProps {
    isOpen: boolean
    onClose: () => void
    client: {id: number, src: string, alt: string, client: string, projectDescription: string, images?: string[]}
}