let promise = new Promise(function (resolve, reject) {
	setTimeout(function () {
		console.log('Promise Created successfully');
		resolve();
	}, 1000);
});
promise.then(function () {
	console.log('Promises resolved');
});
promise.catch(function () {});
promise.finally(function () {
	console.log('the promise is consumed either resolved or rejected');
});
