const product = [
    {
        id: 1,
        name: "Product 1",
        price: 2000000,
        description: "Sản phẩm 1",
        status: true
    },
    {
        id: 2,
        name: "Product 2",
        price: 2000000,
        description: "Sản phẩm 2",
        status: true
    }
]


const result = product.map(pro => {
    return `
        <ul>
            <li>${pro.name}</li>
        </ul>
    `
}).join("");

document.getElementById("hello").innerHTML = `${result}`
