
/*
 * GET home page.
 */

var items = [
	{ "text": "1st Post." },
	{ "text": "2nd Post." }
];

exports.index = function(req, res) {
	res.render('index', { title: 'Entry List', items: items })
};

exports.form = function(req, res) {
	console.log('req.query:', req.query.text);
	res.render('form', { title: 'New Entry'})
};

exports.create = function(req, res) {
	console.log('req.body:', req.body.text);
	res.redirect('/');
};
