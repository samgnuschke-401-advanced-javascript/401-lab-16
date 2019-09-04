'use strict';
/**
 * pulling events into our file
 * @param  {} 'events'
 */
const EventEmitter = require('events');

const events = new EventEmitter;

module.exports = events;