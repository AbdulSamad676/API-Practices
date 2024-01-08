let promiseOne = new Promise(function (resolve, reject) {
	setTimeout(function () {
		console.log('Promise Created successfully');
		resolve();
	}, 1000);
});
promiseOne.then(function () {
	console.log('Promises resolved');
});
promiseOne.catch(function () {});
promiseOne.finally(function () {
	console.log('the promise is consumed either resolved or rejected');
});
// second approach

// let error = false;
// let promiseTwo = new Promise(function (resolve, reject) {
// 	setTimeout(function () {
// 		if (!error) {
// 			resolve({ name: 'Abdul Samad Khan', age: 24 });
// 		} else {
// 			reject('ERR: Something is wrong');
// 		}
// 	}, 1000);
// });

// async function consumePromiseTwo() {
// 	try {
// 		const response = await promiseTwo;
// 		console.log(response);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// consumePromiseTwo();

// fetch API Practices 1st approach

// async function getData() {
// 	try {
// 		let response = await fetch(
// 			'https://api.github.com/users/hiteshchoudhary'
// 		);
// 		let data = await response.json();
// 		console.log(`Name fatched from API: ${data.name}`);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
// getData();

// fetch API Practices 2nd approach

fetch('https://api.github.com/users/hiteshchoudhary')
	.then(response => {
		return response.json();
	})
	.then(data => {
		console.log(`Name: ${data.name} and Followers are: ${data.followers}`);
	})
	.catch(error => {
		console.log('Error occured');
	})
	.finally(() => {
		console.log('API is fatched either succesfully or Error Occured');
	});
