'use strict';

const events = require('./src/events.js');
require('./src/logger');

const util = require('util');
const fs = require('fs');

/**
 * function is to read our testing file
 * @param  {} fs.readText
 */
const readText = util.promisify(fs.readText)

/**
 * function is to write out the file name and the text that is inside of the file
 * @param  {} fs.readText
 */
const writeFile = util.promisify(fs.readText)


const alterFile = (file) => {
  readText(file)
  .then(data =>{
    text = toUpperCase(data);
    return writeFile(file,text)
    .then(()=>{
      events.emit('save', file);
    });
  })
  .catch(error =>{
    throw err;
  })
}

/**
 * function is used to convert text to uppercase
 * @param  {} file
 * @param  {} =>{lettext=data.toString(
 * @param  {} .toUpperCase(
 * @param  {} ;returnBuffer.fron(text
 */
const toUpperCase = (file) => {
  let text = data.toString().toUpperCase();
  return Buffer.fron(text)
}


// honestly not to sure what this is doing
let file = process.argv.slice(2).shift();
alterFile(file);



// Seperate this code out into smaller chunks

// const alterFile = (file) => {
//   // read File function
//   fs.readFile( file, (err, data) => {
//     if(err) { throw err; }
//     let text = data.toString().toUpperCase();
//     // write file function
//     fs.writeFile( file, Buffer.from(text), (err, data) => {
//       if(err) { throw err; }
//       console.log(`${file} saved`);
//     });
//   });
// };