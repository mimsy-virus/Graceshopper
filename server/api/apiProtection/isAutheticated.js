const ifIsAutheticated = (req, res, next) => {
  console.log('1111111', req.user)
  //   console.log('-------', userId)
  //console.log(req.user.dataValues.id)
  if (req.user.dataValues.id === userId || req.user.isAdmin) {
    next()
  } else {
    res.status(401).send('Access Denied!')
  }
}
module.exports = { ifIsAutheticated }
