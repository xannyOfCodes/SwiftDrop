import { Globe, Headphones, Truck, Wallet } from "lucide-react"

type WhyChooseUsDataTypes = {
    id: number,
    title: string,
    icon?: React.ElementType,
    desc: string,
}

export const WhyChooseUsData: WhyChooseUsDataTypes[] = [
    {
        id: 1,
        title: "Fast & Reliable Delivery",
        icon: Truck,
        desc: "Get your packages delivered quickly with real-time tracking so you always know where your shipment is"
    },
    {
        id: 2,
        title: "Affordable Pricing",
        icon: Wallet,
        desc: "Transparent and competitive pricing designed to save you money without compromising on quality"
    },
    {
        id: 3,
        title: "Global Reach",
        icon: Globe,
        desc: "We connect you to multiple destinations worldwide with hassle-free cross-border shipping."
    },
    {
        id: 4,
        title: "24/7 Customer Support",
        icon: Headphones,
        desc: "Our support team is always ready to help you with your delivery needs at any time of the day."
    }
]
   