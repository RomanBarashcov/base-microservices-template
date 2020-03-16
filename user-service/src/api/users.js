const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

    let users = [{
        id: 1,
        userName: "SomeUserName1",
        email: "SomeEmail1"
    },
    {
        id: 2,
        userName: "SomeUserName2",
        email: "SomeEmail2"
    },
    {
        id: 3,
        userName: "SomeUserName2",
        email: "SomeEmail2"
    }];

    res.status(200).json({data: users});

});

module.exports = router;