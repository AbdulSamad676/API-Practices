console.log('Environment setup');

// const response = fetch('https://jsonplaceholder.typicode.com/users')
// 	.then(function (response) {
// 		let data = response.json();
// 		console.log(data.Array);
// 	})
// 	.catch(function (error) {
// 		console.log(`ERR: ${error}`);
// 	});

function display(data) {
	// console.log(data);
	data.forEach(item => {
		console.log(item);
	});
}

fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => {
		return response.json();
	})
	.then(data => {
		// console.log(data);
		display(data);
	})
	.catch(error => console.log(error));
