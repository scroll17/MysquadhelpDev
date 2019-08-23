export default{
    name: [
        {
            name: "type",
            label: "What type of Name are you looking for?",
            component: "select",
            type: "desiredType"
        },
        {
            name: "typeOfVenture",
            label: "Select a category that best describes your businessAgency",
            component: "select",
            type: "typeOfVenture",
            isMulti: true
        },
        {
            name: "whatVentureDoes",
            label: "What does your company / business do?",
            component: "textarea",
            placeholder: "e.g. We're an online lifestyle brand that provides stylish and high quality apparel to the expert eco-conscious shopper."
        },
        {
            name: "targetCustomers",
            label: "Tell us about your customers",
            hint: "Share any relevant information such as their demographics, interests, aspirations etc.",
            component: "textarea",
            placeholder: ""
        },
        {
            name: "style",
            label: "What character, spirit or emotion do you want the name to convey?",
            hint: "You can use adjectives such as serious, fun, professional etc",
            component: "textarea",
            placeholder: ""
        },
        {
            name: "description",
            label: "Any other details that are relevant to this project?",
            hint: "Is there anything else that you haven't covered so far, but might be relevant to the project?",
            component: "textarea",
            placeholder: "Share any additional information or direction that might be useful to creatives"
        }
    ],

    select: {
        desiredType: [
            {value:'Select Type of Name', label:'Select Type of Name'},
            {value:'a Business Name', label:'a Business Name'},
            {value:'a Brand Name', label:'a Brand Name'},
            {value:'a Product Name', label:'a Product Name'},
            {value:'a Website Name', label:'a Website Name'},
            {value:'a Book Title', label:'a Book Title'},
            {value:'an App Name', label:'an App Name'},
            {value:'a Movie or Documentary Title', label:'a Movie or Documentary Title'},
        ],
        typeOfVenture : [
            {value:'Company', label:'Company'},
            {value:'Product', label:'Product'},
            {value:'Project', label:'Project'}
        ]
    }

} ;