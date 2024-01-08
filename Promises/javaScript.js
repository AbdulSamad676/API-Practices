let promise = new Promise(function (resolve, reject) {
	setTimeout(function () {
		console.log('Promise Created successfully');
		resolve();
	}, 1000);
}).then(function () {
	console.log('Promises resolved');
});
