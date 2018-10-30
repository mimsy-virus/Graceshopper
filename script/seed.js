'use strict'

const db = require('../server/db')
const { User } = require('../server/db/models')
const { Product } = require('../server/db/models')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'Cody',
      lastName: 'Dog',
      email: 'cody@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Murphy',
      lastName: 'Fiji',
      email: 'murphy@email.com',
      password: '123'
    })
  ])

  const productsData = [
    {
      id: 1,
      name: 'Glycerine',
      description: 'S92002S',
      imageUrl: 'http://dummyimage.com/165x125.bmp/ff4444/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    },
    {
      id: 2,
      name: 'Lithium Carbonate',
      description: 'M1A08',
      imageUrl: 'http://dummyimage.com/177x130.jpg/ff4444/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    },
    {
      id: 3,
      name: 'Silver Sulfadiazine',
      description: 'M8552',
      imageUrl: 'http://dummyimage.com/154x211.bmp/5fa2dd/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    },
    {
      id: 4,
      name: 'Amlodipine Besylate',
      description: 'Y380X2S',
      imageUrl: 'http://dummyimage.com/195x228.png/dddddd/000000',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    },
    {
      id: 5,
      name: 'AMBROSIA ARTEMISIAEFOLIA',
      description: 'W5559XA',
      imageUrl: 'http://dummyimage.com/156x221.bmp/5fa2dd/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    },
    {
      id: 6,
      name: 'ESZOPICLONE',
      description: 'T531X2S',
      imageUrl: 'http://dummyimage.com/115x187.png/cc0000/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    },
    {
      id: 7,
      name: 'Avobenzone, Homosalate, Octisalate, Octocrylene, Oxybenzone',
      description: 'D36',
      imageUrl: 'http://dummyimage.com/204x153.bmp/cc0000/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      id: 8,
      name:
        'Bismuth subcitrate potassium, Metronidazole, Tetracycline hydrochloride',
      description: 'S82263R',
      imageUrl: 'http://dummyimage.com/134x141.jpg/ff4444/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      id: 9,
      name: 'PredniSONE',
      description: 'Y213XXS',
      imageUrl: 'http://dummyimage.com/201x141.jpg/ff4444/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      id: 10,
      name: 'Bicalutamide',
      description: 'S72136Q',
      imageUrl: 'http://dummyimage.com/112x205.bmp/dddddd/000000',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      id: 11,
      name: 'Isosorbide Mononitrate',
      description: 'S90912D',
      imageUrl: 'http://dummyimage.com/187x249.png/cc0000/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      id: 12,
      name: 'Diphenhydramine HCl',
      description: 'S53101S',
      imageUrl: 'http://dummyimage.com/232x110.png/5fa2dd/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      id: 13,
      name: 'estradiol',
      description: 'I800',
      imageUrl: 'http://dummyimage.com/164x178.png/5fa2dd/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      id: 14,
      name: 'fluvoxamine maleate',
      description: 'T565X2S',
      imageUrl: 'http://dummyimage.com/202x128.png/5fa2dd/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      id: 15,
      name: 'BENZALKONIUM CHLORIDE',
      description: 'Q892',
      imageUrl: 'http://dummyimage.com/171x130.png/ff4444/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      id: 16,
      name: 'Warfarin Sodium',
      description: 'T50993',
      imageUrl: 'http://dummyimage.com/122x123.bmp/5fa2dd/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      id: 17,
      name: 'Titanium Dioxide and Zinc Oxide',
      description: 'S82143R',
      imageUrl: 'http://dummyimage.com/113x216.bmp/5fa2dd/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      id: 18,
      name: 'Hydroxyzine Hydrochloride',
      description: 'S22050D',
      imageUrl: 'http://dummyimage.com/135x217.bmp/cc0000/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      id: 19,
      name: 'Acetaminophen, Chlorpheniramine Maleate',
      description: 'S63301',
      imageUrl: 'http://dummyimage.com/137x218.jpg/cc0000/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      id: 20,
      name: 'AVOBENZONE, OCTINOXATE, ZINC OXIDE, OCTOCRYLENE',
      description: 'S32444A',
      imageUrl: 'http://dummyimage.com/181x248.jpg/5fa2dd/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'shot'
    },
    {
      id: 21,
      name: 'PROCAINAMIDE HYDROCHLORIDE',
      description: 'T8283',
      imageUrl: 'http://dummyimage.com/175x231.png/ff4444/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    },
    {
      id: 22,
      name: 'Octinoxate and Oxybenzone',
      description: 'H74311',
      imageUrl: 'http://dummyimage.com/124x122.bmp/dddddd/000000',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    },
    {
      id: 23,
      name: 'Pork',
      description: 'S22010A',
      imageUrl: 'http://dummyimage.com/182x219.jpg/dddddd/000000',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    },
    {
      id: 24,
      name: 'Acetaminophen',
      description: 'S99822',
      imageUrl: 'http://dummyimage.com/188x203.png/5fa2dd/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    },
    {
      id: 25,
      name:
        'Antimonium tartaricum, Belladonna, Bryonia,Causticum, Coccus cacti, Cuprum aceticum, Drosera rotundifolia, Kreosotum, Lobelia inflata, Pulsatilla, Stannum metallicum, Sticta pulmonaria',
      description: 'S82221M',
      imageUrl: 'http://dummyimage.com/179x174.jpg/5fa2dd/ffffff',
      price: 9.99,
      quantity: 10,
      category: 'pill'
    }
  ]

  const products = await Product.bulkCreate(productsData)

  console.log(`seeded ${users.length} users`)
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
