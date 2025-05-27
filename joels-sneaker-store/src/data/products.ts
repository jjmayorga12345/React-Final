export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    brand: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Jordan 4 White Cement',
        brand: 'Jordan',
        price: 250.00,
        image: 'https://cdn.flightclub.com/TEMPLATE/463428/1.jpg?w=1080',
        description: 'Jordan',
    },
    {
        id: 2,
        name: 'Jordan 1 Retro',
        brand: 'Jordan',
        price: 149.99,
        image: 'https://cdn.flightclub.com/TEMPLATE/467216/1.jpg?w=1080',
        description: 'OG 1s with a mix of union',
    },
    {
        id: 3,
        name: 'Jordan 4 Retro',
        brand: 'Jordan',
        price: 219.99,
        image: 'https://cdn.flightclub.com/TEMPLATE/486055/1.jpg?w=1080',
        description: 'Jordan 4 mix of color blocking of OGs',
    },
    {
        id: 4,
        name: 'Nike Dunk Low',
        brand: 'Nike',
        price: 109.99,
        image: 'https://cdn.flightclub.com/TEMPLATE/244800/1.jpg?w=1080',
        description: 'Off-white dunk',
    },
    {
        id: 5,
        name: 'New Balance',
        brand: 'New Balance',
        price: 89.99,
        image: 'https://cdn.flightclub.com/TEMPLATE/275138/1.jpg?w=1080',
        description: 'super comfy',
    },
    {
        id: 6,
        name: 'Jordan 3',
        brand: 'Jordan',
        price: 99.99,
        image: 'https://cdn.flightclub.com/TEMPLATE/348432/1.jpg?w=1080',
        description: 'Jordan 3, Classic',
    },
];
