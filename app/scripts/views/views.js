var $ = require('jquery');
var Backbone = require('backbone');

var formTemplate = require('../../templates/email-form.hbs');

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


module.exports = {
  'FormView' : FormView,

};
