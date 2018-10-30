const db = require('./db')

// register models
const {Order, Product, Review, User} = require('./models')

User.hasMany(Order)
Order.belongsTo(User)

User.hasMany(Review)
Review.belongsTo(User)

Product.hasMany(Review)
Review.belongsTo(Product)

Order.hasMany(Product)
Product.belongsToMany(Order)

module.exports = db
