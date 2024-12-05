import { products } from "./data (1)";

export default function SAS() {
    const FilteredHarga = products.filter((user) => user.price > 400000000);

    return (
        <ul>
            {products.map ((products)=> (
        <li key={products.id}>{products.price}</li>
        ))}

        <img src="{products.imageUrl}" alt="" />
        <p>{products.description}</p>
        </ul>
    )
}