const router = require('express').Router();

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/H-Thai-ML-img.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/cat-cafe-img.jpg'
    }];
    res.render('places/index', {places});
});

//New
router.get('/new', (req, res) => {
    res.render('places/new');
});

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places');
});

//:id
router.get('/:id', (req, res) => {
    res.render('places/:id');
});

module.exports = router;