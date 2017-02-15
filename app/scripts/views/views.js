var $ = require('jquery');
var Backbone = require('backbone');

var formTemplate = require('../../templates/form-control.hbs');
var contactTemplate = require('../../templates/contact-info.hbs');

var FormView = Backbone.View.extend({
  tagName: 'form',
  id: 'infoForm',
  template: formTemplate,
  render: function(){
    console.log(formTemplate);
    this.$el.html(formTemplate());
    return this;
  }
});

var ContactView = Backbone.View.extend({
  className: 'contact-info',

});


module.exports = {
  'FormView' : FormView,

};
