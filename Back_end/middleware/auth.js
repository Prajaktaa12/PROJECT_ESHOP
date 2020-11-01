
function Auth(req, res, next) {
    if (!req.userEmail) { return res.status(403).send({ message: "Invalid user" }) };
    next();
};

module.exports = Auth;


