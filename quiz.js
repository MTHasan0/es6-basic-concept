

const cube=x=> x*x*x; 
console.log(cube(2))

const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);


const {x, y, z} = {x: 1, y: 2, z: 3};
console.log(y);

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);

const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];

const friend = friends.find(frnd => frnd.length == 5);

console.log(friend);


const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}

const {price} = product;

console.log(price);