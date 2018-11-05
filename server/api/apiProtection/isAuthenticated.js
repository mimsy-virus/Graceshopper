const isAuthenticated = (req, userId) =>
  Number(req.user.dataValues.id) === Number(userId) || req.user.isAdmin
module.exports = { isAuthenticated }
