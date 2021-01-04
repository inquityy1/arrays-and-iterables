/*const ids = new Set(['hi', 'from' , 'set']);
ids.add(2);
ids.delete('hi');

for (const entry of ids.entries()) {
	console.log(entry);
}

const person1 = {name: 'max'};
const person2 = {name: 'manuel'};

const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

personData.set(person2, [{date: 'two weeks ago', price: 100}]);

console.log(personData);
console.log(personData.get(person1));

for (const [key, value] of personData.entries()) {
	console.log(key, value);
}

for (const value of personData.values()) {
	console.log(value);
}

for (const keys of personData.keys()) {
	console.log(keys);
}
*/

let person = {name: 'Max'};
const persons = new WeakSet();
persons.add(person);

// ... some operations
person = null;

console.log(persons);

const personData = new WeakMap();
personData.set(person, 'Extra info!');

person = null;

console.log(personData);


























