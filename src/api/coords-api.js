export default a = (cb) => {

		navigator.geolocation.getCurrentPosition((r) => {
			cb(r)
		}, (err) => {
			reject(err)
		})

}

try {
	const coords = a(function(r) {
		console.log(r)
	});
}
catch(err) {

}