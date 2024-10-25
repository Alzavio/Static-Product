import React from 'react';

function ProductList(props) {
    const products = [
        { id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200 },
        { id: 2, name: "Tablet", description: "Drawing tablet.", price: 700 },
        { id: 3, name: "Phone", description: "Samsung s24.", price: 200 }
    ]
    return (
        <div>
            {products.map((product) => (
                <div key={product.id} className={"border p-3 mt-2 ms-2"}>
                    <div className={"mb-3"}>
                        <div className={"font-bold"}>
                            {product.name}
                        </div>
                        <span className={"italic"}>
                            ${product.price}
                        </span>
                    </div>
                    {product.description}
                </div>
            ))}
        </div>
    );
}

export default ProductList;