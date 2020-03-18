const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

    let movies = [{
        id: 1,
        title: "Some Title1",
        description: "Some Description1",
        price: 100,
        release: new Date()
    },
    {
        id: 2,
        title: "Some Title2",
        description: "Some Description2",
        price: 100,
        release: new Date()
    },
    {
        id: 3,
        title: "Some Title3",
        description: "Some Description3",
        price: 100,
        release: new Date()
    }];

    res.status(200).json({data: movies});

});

module.exports = router;