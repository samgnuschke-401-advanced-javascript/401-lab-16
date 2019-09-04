'use strict';
/**
 * importing our events.js file
 * @param  {} './events.js'
 */
const events = require('./events.js');


events.on('read', file => log('read', file));

/**
 * Setting up the event that will run when we save a file
 * @param  {} 'save'
 * @param  {} file=>log('save'
 * @param  {} file
 */
events.on('save', file=>log('save',file));


/**
 * console logging our saved file
 * @param  {} event
 * @param  {} file
 * @param  {} {console.log(`${file}saved`
 */
function log(event,file){
  let time = new Date()
  console.log(`${event, file, time} saved`);
}