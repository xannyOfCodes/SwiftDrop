import { BriefcaseBusiness, Calculator, Headset, Truck } from "lucide-react"


type Action = {
    id: number,
    title: string,
    icon: React.ElementType,
    desc: string,
}


export const QuickActionData: Action[] = [
    {
        id: 1,
        title: "Send a Shipment",
        icon: Truck,
        desc: "Ship your package effortlessly. No account required"
    },
    {
        id: 2,
        title: "Rate Calculator",
        icon: Calculator,
        desc: "Get instant accurate shipping rates tailored to your needs."
    },
    {
        id: 3,
        title: "SwiftDrop Business",
        icon: BriefcaseBusiness,
        desc: "Partner with SWiftDrop for seamless and scalable shipping solutions"
    },
    {
        id: 4,
        title: "Help & Support",
        icon: Headset,
        desc: "Find answers fast or connect with our support team anytime"
    }
]