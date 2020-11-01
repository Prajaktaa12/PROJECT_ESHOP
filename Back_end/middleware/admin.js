function Admin(req, res, next) {
    if (!req.user.isAdmin) { return res.status(403).send({ message: "Invalid user" }) };
    next();
};

module.exports = Admin;