const numbers = [10, 12, 45, 98, 2, 79, 25, 31, 4];


const output = numbers.map(num => num * 2);

const output2 = numbers.map(num => num /2);


const friend = ['Kamrul', 'Nayem', 'mota nayem', 'sumon', 'roni', 'hasan'];

const lengths = friend.map(frnd => frnd.length);


const output3 = numbers.reduce((a, c) => a+c, 0);

console.log(lengths);



console.log(output);
console.log(output2);
console.log(output3);