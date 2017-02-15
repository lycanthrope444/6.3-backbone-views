var $ = require('jquery');
var Backbone = require('backbone');

var models = require('../models/models');
var formTemplate = require('../../templates/form-control.hbs');
var contactTemplate = require('../../templates/contact-info.hbs');

var FormView = Backbone.View.extend({
  tagName: 'form',
  id: 'infoForm',
  attributes : {
    method: 'post'
  },
  events: {
    'submit': 'addContact'
  },
  template: formTemplate,
  render: function(){
    this.$el.html(formTemplate());
    return this;
  },
  addContact: function(event){
    event.preventDefault();
    var $name = $('#name');
    var $phone = $('#phone');
    var $email = $('#email');
    var $twitter = $('#twitter');
    var $linkedin = $('#linkedin');

    this.collection.create({
      name: $name.val(),
      phone: $phone.val(),
      email: $email.val(),
      twitter: $twitter.val(),
      linkedin: $linkedin.val()
    });

    $name.val('');
    $phone.val('');
    $email.val('');
    $twitter.val('');
    $linkedin.val('');
  }
});

var ContactView = Backbone.View.extend({
  className: 'contact-info',
  template: contactTemplate,
  events: {
    "click .erase" : "nukeSelf"
  },
  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
  },
  render: function(){
    console.log("iterating", this);
    // var context = this.model.toJSON();
    this.$el.html(this.template());
    return this;
  },
  nukeSelf: function(){
    this.model.destroy();
  }
});


module.exports = {
  'FormView' : FormView,
  'ContactView' : ContactView
};
