export const PRODUCT_CATEGORIES =[
    {
        label: 'UI Kits',
        value: 'ui_kits' as const,
        featured:[
            {
                name : 'Editor picks',
                href: '#',
                imgageSrc: '/nav/ui-kits/mixed.jpg',
            },
            {
                name : 'New Arrivals',
                href: '#',
                imgageSrc: '/nav/ui-kits/blue.jpg',
            },
            {
                name : 'Bestsellers',
                href: '#',
                imgageSrc: '/nav/ui-kits/purple.jpg',
            },
        ],
    },
    {
        label: 'Icons',
        value: 'icons' as const,
        featured:[
            {
                name : 'Favorite Icon picks',
                href: '#',
                imgageSrc: '/nav/icons/mixed.jpg',
            },
            {
                name : 'New Arrivals',
                href: '#',
                imgageSrc: '/nav/icons/blue.jpg',
            },
            {
                name : 'Bestsellers Icons',
                href: '#',
                imgageSrc: '/nav/icons/purple.jpg',
            },
        ],
    },
]