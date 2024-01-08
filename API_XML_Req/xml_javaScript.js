const requestUrl = 'https://api.github.com/users/hiteshchoudhary';
const image = document.querySelector('.image');
const userName = document.querySelector('.name');
const followers = document.querySelector('.followers');
const youTubeLink = document.querySelector('.link');

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
		// image.src = data.avatar_url;
		image.setAttribute('src', data.avatar_url);
		userName.innerHTML = data.name;
		followers.innerHTML = data.followers;
		youTubeLink.href = data.blog;
	}
	console.log(data);
};

xhr.send(); // this method call the open method
