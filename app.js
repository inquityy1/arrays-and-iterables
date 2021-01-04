/* const numbers = [1, 2, 3];
console.log(numbers);

//const moreNumbers = Array(5);
//console.log(moreNumbers);

//const yetMoreNumbers = Array.of(1, 2);
//console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ['cooking', 'Sports'];
const personalData = [30, 'Max', {moreDetail: []}];

const analyticsData = [[1, 1.6], [-5.4, 2.1]];

for (const data of analyticsData) {
	for (const dataPoint of data) {
		console.log(dataPoint);
	}
}

console.log(personalData[1]);

const hobbies = ['sports', 'Cooking'];
hobbies.push('Reading');
hobbies.unshift('coding');
const poppedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] = 'coding';
//hobbies[5] = 'reading';
console.log(hobbies, hobbies[4]);

hobbies.splice(1, 0, 'Good Food');
console.log(hobbies);

const removedElements = hobbies.splice(-2, 1);
console.log(hobbies);
*/
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
//const storedResults = testResults.slice(2);
const storedResults = testResults.concat([3.99, 2]);

testResults.push(5.91);

console.log(testResults, storedResults);
console.log(testResults.indexOf(1.5));

const personData = [{name: 'Max'}, {name: 'Manuel'}];
console.log(personData.indexOf({ name: 'Manuel'}));

const manuel = personData.find((person, idx, persons) => {
	return person.name === 'Manuel';
});

manuel.name = 'Anna';

console.log(manuel, personData);

const maxIndex = personData.findIndex((person, idx, persons) => {
	return person.name === 'Max';
});

console.log(maxIndex);























