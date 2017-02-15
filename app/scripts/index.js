var $ = require('jquery');

var models = require('./models/models');
var views = require('./views/views');

$(function(){

  // Section for Models & Collection
  var myContacts = new models.ContactCollection();

  // View Displays
  var infoForm = new views.FormView({collection : myContacts});
  $('.info-column').append(infoForm.render().el);

  var contactList = new views.ContactView({collection : myContacts});
  $('.contact-column').append(contactList.render().el);

  console.log(myContacts.fetch());
});
