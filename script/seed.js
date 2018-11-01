'use strict'

const db = require('../server/db')
const { User } = require('../server/db/models')
const { Product } = require('../server/db/models')
const { Review } = require('../server/db/models')
const { Order } = require('../server/db/models')
const { OrderProduct } = require('../server/db/models')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')

  const usersData = [
    {
      firstName: 'James',
      lastName: 'Stephens',
      email: 'brrp@email.com',
      password: '123',
      isAdmin: true
    },
    {
      firstName: 'James',
      lastName: 'Stephens',
      email: 'brrp1@email.com',
      password: 'abcd',
      isAdmin: true
    },
    {
      firstName: 'Rui',
      lastName: 'Yang',
      email: 'rui@email.com',
      password: '123',
      isAdmin: true
    },
    {
      firstName: 'Monferd',
      lastName: 'Collin',
      email: 'monmon@email.com',
      password: '123',
      isAdmin: true
    },
    {
      firstName: 'Chris',
      lastName: 'Li',
      email: 'chrisLi@email.com',
      password: '123',
      isAdmin: true
    },
    {
      firstName: 'Cody',
      lastName: 'Dog',
      email: 'cody@email.com',
      password: '123'
    },
    {
      firstName: 'Not',
      lastName: 'Cody',
      email: 'notcody@email.com',
      password: '123'
    },
    {
      firstName: 'Murphy',
      lastName: 'Fiji',
      email: 'murphy@email.com',
      password: '123'
    }
  ]

  const productsData = [
    {
      name: 'Glycerine',
      description: 'S92002S',
      imageUrl: 'http://dummyimage.com/165x125.bmp/ff4444/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    },
    {
      name: 'Lithium Carbonate',
      description: 'M1A08',
      imageUrl: 'http://dummyimage.com/177x130.jpg/ff4444/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    },
    {
      name: 'Silver Sulfadiazine',
      description: 'M8552',
      imageUrl: 'http://dummyimage.com/154x211.bmp/5fa2dd/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    },
    {
      name: 'Amlodipine Besylate',
      description: 'Y380X2S',
      imageUrl: 'http://dummyimage.com/195x228.png/dddddd/000000',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    },
    {
      name: 'AMBROSIA ARTEMISIAEFOLIA',
      description: 'W5559XA',
      imageUrl: 'http://dummyimage.com/156x221.bmp/5fa2dd/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    },
    {
      name: 'ESZOPICLONE',
      description: 'T531X2S',
      imageUrl: 'http://dummyimage.com/115x187.png/cc0000/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    },
    {
      name: 'Avobenzone, Homosalate, Octisalate, Octocrylene, Oxybenzone',
      description: 'D36',
      imageUrl: 'http://dummyimage.com/204x153.bmp/cc0000/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      name:
        'Bismuth subcitrate potassium, Metronidazole, Tetracycline hydrochloride',
      description: 'S82263R',
      imageUrl: 'http://dummyimage.com/134x141.jpg/ff4444/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      name: 'PredniSONE',
      description: 'Y213XXS',
      imageUrl: 'http://dummyimage.com/201x141.jpg/ff4444/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      name: 'Bicalutamide',
      description: 'S72136Q',
      imageUrl: 'http://dummyimage.com/112x205.bmp/dddddd/000000',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      name: 'Isosorbide Mononitrate',
      description: 'S90912D',
      imageUrl: 'http://dummyimage.com/187x249.png/cc0000/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      name: 'Diphenhydramine HCl',
      description: 'S53101S',
      imageUrl: 'http://dummyimage.com/232x110.png/5fa2dd/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      name: 'estradiol',
      description: 'I800',
      imageUrl: 'http://dummyimage.com/164x178.png/5fa2dd/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      name: 'fluvoxamine maleate',
      description: 'T565X2S',
      imageUrl: 'http://dummyimage.com/202x128.png/5fa2dd/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      name: 'BENZALKONIUM CHLORIDE',
      description: 'Q892',
      imageUrl: 'http://dummyimage.com/171x130.png/ff4444/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      name: 'Warfarin Sodium',
      description: 'T50993',
      imageUrl: 'http://dummyimage.com/122x123.bmp/5fa2dd/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      name: 'Titanium Dioxide and Zinc Oxide',
      description: 'S82143R',
      imageUrl: 'http://dummyimage.com/113x216.bmp/5fa2dd/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      name: 'Hydroxyzine Hydrochloride',
      description: 'S22050D',
      imageUrl: 'http://dummyimage.com/135x217.bmp/cc0000/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      name: 'Acetaminophen, Chlorpheniramine Maleate',
      description: 'S63301',
      imageUrl: 'http://dummyimage.com/137x218.jpg/cc0000/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      name: 'AVOBENZONE, OCTINOXATE, ZINC OXIDE, OCTOCRYLENE',
      description: 'S32444A',
      imageUrl: 'http://dummyimage.com/181x248.jpg/5fa2dd/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      name: 'PROCAINAMIDE HYDROCHLORIDE',
      description: 'T8283',
      imageUrl: 'http://dummyimage.com/175x231.png/ff4444/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    },
    {
      name: 'Octinoxate and Oxybenzone',
      description: 'H74311',
      imageUrl: 'http://dummyimage.com/124x122.bmp/dddddd/000000',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    },
    {
      name: 'Pork',
      description: 'S22010A',
      imageUrl: 'http://dummyimage.com/182x219.jpg/dddddd/000000',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    },
    {
      name: 'Acetaminophen',
      description: 'S99822',
      imageUrl: 'http://dummyimage.com/188x203.png/5fa2dd/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    },
    {
      name:
        'Antimonium tartaricum, Belladonna, Bryonia,Causticum, Coccus cacti, Cuprum aceticum, Drosera rotundifolia, Kreosotum, Lobelia inflata, Pulsatilla, Stannum metallicum, Sticta pulmonaria',
      description: 'S82221M',
      imageUrl: 'http://dummyimage.com/179x174.jpg/5fa2dd/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    }
  ]

  const reviewsData = [
    {
      reviewText: 'brrp da brrp da brrp',
      rating: 3,
      userId: 2,
      productId: 7
    },
    {
      reviewText: 'brrp da brrp da brrp',
      rating: 2,
      userId: 1,
      productId: 18
    },
    {
      reviewText: 'brrp da brrp da brrp',
      rating: 4,
      userId: 1,
      productId: 23
    },
    {
      reviewText: 'brrp da brrp da brrp',
      rating: 7,
      userId: 1,
      productId: 13
    },
    {
      reviewText: 'brrp da brrp da brrp',
      rating: 9,
      userId: 1,
      productId: 3
    },
    {
      reviewText: 'brrp da brrp da brrp',
      rating: 3,
      userId: 2,
      productId: 3
    }
  ]

  const ordersData = [
    {
      status: 'completed',
      shippingAddress: '123 way lane',
      shippingCity: 'Miami',
      shippingState: 'FL',
      shippingZipCode: '34110',
      subTotal: 39.96,
      taxRate: 0.06,
      total: 42.36,
      userId: 1
    },
    {
      status: 'cart',
      shippingAddress: null,
      shippingCity: null,
      shippingState: null,
      shippingZipCode: null,
      subTotal: null,
      taxRate: null,
      total: null,
      userId: 1
    },
    {
      status: 'processing',
      shippingAddress: '456 clutter ave',
      shippingCity: 'Miami',
      shippingState: 'FL',
      shippingZipCode: '34110',
      subTotal: 9.99,
      taxRate: 0.06,
      total: 10.59,
      userId: 2
    }
  ]

  const orderProductsData = [
    {
      orderId: 1,
      productId: 1,
      quantity: 3,
      price: 9.99
    },
    {
      orderId: 1,
      productId: 6,
      quantity: 1,
      price: 9.99
    },
    {
      orderId: 2,
      productId: 1,
      quantity: 2,
      price: 9.99
    },
    {
      orderId: 2,
      productId: 17,
      quantity: 1,
      price: 9.99
    },
    {
      orderId: 2,
      productId: 15,
      quantity: 2,
      price: 9.99
    },
    {
      orderId: 3,
      productId: 11,
      quantity: 1,
      price: 9.99
    }
  ]

  // await User.bulkCreate(usersData)
  const users = await Promise.all([
    User.create({
      firstName: 'James',
      lastName: 'Stephens',
      email: 'brrp@email.com',
      password: '123',
      isAdmin: true
    }),
    User.create({
      firstName: 'James',
      lastName: 'Stephens',
      email: 'brrp1@email.com',
      password: 'abcd',
      isAdmin: true
    }),
    User.create({
      firstName: 'Rui',
      lastName: 'Yang',
      email: 'rui@email.com',
      password: '123',
      isAdmin: true
    }),
    User.create({
      firstName: 'Monferd',
      lastName: 'Collin',
      email: 'monmon@email.com',
      password: '123',
      isAdmin: true
    }),
    User.create({
      firstName: 'Chris',
      lastName: 'Li',
      email: 'chrisLi@email.com',
      password: '123',
      isAdmin: true
    }),
    User.create({
      firstName: 'Cody',
      lastName: 'Dog',
      email: 'cody@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Not',
      lastName: 'Cody',
      email: 'notcody@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Murphy',
      lastName: 'Fiji',
      email: 'murphy@email.com',
      password: '123'
    })
  ])
  await Product.bulkCreate(productsData)
  await Review.bulkCreate(reviewsData)
  await Order.bulkCreate(ordersData)
  await OrderProduct.bulkCreate(orderProductsData)

  console.log(`seeded ${usersData.length} users`)
  console.log(`seeded ${productsData.length} products`)
  console.log(`seeded ${reviewsData.length} reviews`)
  console.log(`seeded ${ordersData.length} orders`)
  console.log(`seeded ${orderProductsData.length} order products`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
