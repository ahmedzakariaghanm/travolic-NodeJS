var express              = require('express'),
    routes               = express.Router();
    sort                 = require('./Sort')
    search               = require('./Search')
routes.get('/', (req, res) => {
    return res.send('Hello, this is the API!');
    // return res.render('Hello, this is the API!');
});

routes.get('/sortByName', sort.sortByName)
routes.get('/sortByPrice',sort.sortByPrice) 
routes.get('/search/',search.search) 

module.exports = routes;