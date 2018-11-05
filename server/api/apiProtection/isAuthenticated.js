const isAutheticated = (req, userId) =>
  Number(req.user.dataValues.id) === Number(userId) || req.user.isAdmin
module.exports = isAutheticated
