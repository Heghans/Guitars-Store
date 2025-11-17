type Guitar = {
    id : number;
    name: string;
    image : string;
    description: string;
    price : number;

}

type CartItem = Guitar & {
    quantity : number
}

type GuitarProps = {
    guitar : Guitar,
    addToCart : (item: any) => void
}