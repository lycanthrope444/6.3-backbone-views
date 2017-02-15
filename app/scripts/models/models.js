var $ = require('jquery');
var Backbone = require('backbone');

var Contacts = Backbone.Model.extend({
  defaults: {
    'name': "n/a",
    'phone': "n/a",
    'email':'n/a',
    'twitter':'n/a',
    'linkedin':'n/a'
  }
});

module.exports = {
  'Contacts' : Contacts
};
