import { Briefcase, Handshake, Headphones } from "lucide-react"

type GetInTouchDataTypes = {
    id: number,
    icon: React.ElementType,
    title: string,
    desc: string,
}

export const GetInTouchData: GetInTouchDataTypes[] = [
    {
        id: 1,
        icon: Headphones,
        title: "Customer Support",
        desc: "Need help with a delivery or have a question? Our support team is here to assist you anytime.",
    },
    {
        id: 2,
        icon: Handshake,
        title: "Business Enquiries",
        desc: "Partner with us to streamline your logistics and grow your business with reliable delivery solutions.",
    },
    {
        id: 3,
        icon: Briefcase,
        title: "Careers",
        desc: "Join our team and be part of a growing company shaping the future of global delivery services.",
    }
]