import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

type SocialHandlesTypes = {
    id: number,
    icon: React.ElementType
}


export const SocialHandles: SocialHandlesTypes[] = [
    {
        id: 1,
        icon: Facebook
    },
    {
        id: 2,
        icon: Instagram
    },
    {
        id: 3,
        icon: Twitter
    },
    {
        id: 4,
        icon: Linkedin
    },
    {
        id: 5,
        icon: Youtube
    }
]