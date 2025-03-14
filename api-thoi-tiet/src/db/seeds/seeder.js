require('dotenv/config');
const mongoConnect = require('../../common/mongoConnect');
const langSeed = require('./langSeed');
const locationSeed = require('./locationSeed');
const newsSeed = require('./newsSeed');
const userSeed = require('./userSeed');

async function seeder() {
  await mongoConnect();
  await locationSeed(); 
  await langSeed();
  await userSeed();
  await newsSeed();
  console.log('Finished seeding');
  process.exit(0);
}

seeder();
