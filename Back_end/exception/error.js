module.exports = function (error, req, res, next) {
    res.status(500).send({ message: "something get failed" });
};
