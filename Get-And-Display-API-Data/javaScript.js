// console.log('Environment setup');
let table = document.querySelector('.table-data');
console.log(table.innerHTML);
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
		let row = document.createElement('tr');
		row.innerHTML = `<td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.website}</td>`;
		row.className = 'data-row';
		table.appendChild(row);
		// console.log(item);
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
