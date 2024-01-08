const requestUrl = 'https://api.github.com/users/hiteshchoudhary';
let xhr = new XMLHttpRequest(); // creating xml object
const url = xhr.open('Get', requestUrl); //sending request to the server
let data;
// onreadystatechange takes a function to be tracked not itself a function
xhr.onreadystatechange = function () {
	console.log(xhr.readyState);

	if (xhr.readyState === 4) {
		data = JSON.parse(this.responseText);
		// actually hamy data string me milta hai es liye ham JSON.parse use kar k object format me convert kary hai
		// console.log(data.followers); // this actually refers to the current object
	}
	console.log(data);
};

xhr.send(); // this method call the open method
