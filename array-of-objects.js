const products = [
    {id: 1, name: 'Lenovo', price: 45000},
    {id: 2, name: 'HP', price: 55000},
    {id: 3, name: 'Dell', price: 50000},
    {id: 4, name: 'Macbook Pro', price: 150000}
]

const names = products.map(product => product.name);

console.log(names);