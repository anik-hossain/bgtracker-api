module.exports = function (req, res, next) {
    const header = req.headers.authorization;
    if (!header) {
        return res
            .status(401)
            .json({ errors: { global: 'Authentication failed' } });
    }

    // Beared token
    const token = header.split(' ')[1];
    const userId = token.split(':')[1];

    req.userId = userId;

    next();
};
