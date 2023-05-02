module.exports = function(app) {
    // Home page
    app.get('//', function(req, res) {
        res.render('index.ejs');
    });
}