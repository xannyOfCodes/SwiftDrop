type FooterListDataTypes = {
    id: number,
    Top_Level: string,
    second_Level: {}
}

export const FooterListData: FooterListDataTypes[] = [
    {   
        id: 1,
        Top_Level: "Company", 
        second_Level:[
                    { id: 1, name: " About Us", path: ""},
        ]
    },
    {   id: 2,
        Top_Level: "Support", 
        second_Level:[
                    { id: 1, name: "Help & Support Center", path: ""},
        ]
    },
    { 
        id: 3,
        Top_Level: "Legal", 
        second_Level:[
                    { id: 1, name: "Terms of Use", path: ""},
                    { id: 2, name: " Privacy Policy", path: ""},
                    { id: 3, name: "Frequently Asked Questions", path: ""},
        ]
    },
]
