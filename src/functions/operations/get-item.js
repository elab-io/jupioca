
const fs = require('fs')
const path = require('path');

// console.log(__dirname);

// In this case, data read from the fs, but it could also be a cached API result.
const data = fs.readFileSync(path.join(__dirname, '../data/item.json'), 'utf8')
const parsedData = JSON.parse(data)

function getItem () {

  // console.log('Requested Item Data:', data)
  return parsedData
}

module.exports = { getItem }
