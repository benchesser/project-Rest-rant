const router = require('express').Router();
const places = require('../models/places')

router.get('/', (req, res) => {
    res.render('places/index', {places});
});

//New
router.get('/new', (req, res) => {
    res.render('places/new');
});

router.post('/', (req, res) => {
    if (!req.body.pic) {
        //Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    };
    if (!req.body.city) {
        req.body.city = 'Anytown'
    };
    if (!req.body.state) {
        req.body.state = 'USA'
    };
    places.push(req.body);
    res.redirect('/places');
});

//:id
router.get('/:id', (req, res) => {
    res.render('places/:id');
});

module.exports = router;