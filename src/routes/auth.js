const express = require('express');
const authenticate = require('../middlewares/authenticate');
const User = require('../model/User');

let router = express.Router();

router.get('/currentUser', authenticate, async (req, res) => {
    const user = await User.query().findOne({ id: req.userId });
    if (user) {
        res.json({
            id: user.id,
            email: user.email,
            username: user.username,
        });
    } else {
        res.status(404).json({});
    }
});

module.exports = router;
