const express = require('express');
const app = express();
const port = 3000;

// I know this isn't the best way to do this.
// But it's easier to pass in the link in the query params of the endpoint.
// Also, it is just easier to send a GET request from any browser address bar.
app.get('/', (req, res) => {
	const { link } = req.query;

	// Validating if the query param is a valid link or not
	try {
		url = new URL(link);
		res.send(link);
	} catch (e) {
		res.send(`Error occured. Invalid URL. Details: ${e}`);
	}
});

app.listen(port, () => {
	console.log(`Saveit app listening on port ${port}`);
});
