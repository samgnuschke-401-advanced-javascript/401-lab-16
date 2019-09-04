'use strict';

const events = require('./events.js');
events.on('save', handleSave);
events.on('delete', handleDelete);

function handleSave(file) {
  console.log(`You saved ${file.id}`);

  events.emit('cache-update', { id: file.id });
};

function handleDelete(file) {
  console.log(`You deleted ${file.id}`);

  events.emit('cache-update', { id: file.id });
};

module.exports = {
  handleSave,
  handleDelete,
}
