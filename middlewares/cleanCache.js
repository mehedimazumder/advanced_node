const { clearHash } = require("../services/cache");

module.exports = async function (req, res, next) {
  await next();

  clearHash(req.user.id);
};
