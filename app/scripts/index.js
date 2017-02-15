var $ = require('jquery');

var models = require('./models/models');
var views = require('./views/views');

$(function(){

  // Section for Models & Collection

  // View Displays
  var infoForm = new views.FormView();
  $('.info-column').append(infoForm.render().el);

});
