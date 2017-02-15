var $ = require('jquery');
var Backbone = require('backbone');

var models = require('../models/models');
var formTemplate = require('../../templates/form-control.hbs');
var contactTemplate = require('../../templates/contact-info.hbs');

// Form View
var FormView = Backbone.View.extend({
  tagName: 'form',
  id: 'infoForm',
  attributes : {
    method: 'post'
  },
  //takes the submit input to fire off the creation event
  events: {
    'submit': 'addContact'
  },

  //takes template from handlebars

  template: formTemplate,

  //displays template
  render: function(){
    this.$el.html(formTemplate());
    return this;
  },

  //takes the info in the form to create a model inside collection
  addContact: function(event){
    event.preventDefault();
    //This is probably where john's code comes in handy to save space
    var $name = $('#name');
    var $phone = $('#phone');
    var $email = $('#email');
    var $twitter = $('#twitter');
    var $linkedin = $('#linkedin');
    // Actual creation section
    this.collection.create({
      name: $name.val(),
      phone: $phone.val(),
      email: $email.val(),
      twitter: $twitter.val(),
      linkedin: $linkedin.val()
    });
    //Clears form values
    $name.val('');
    $phone.val('');
    $email.val('');
    $twitter.val('');
    $linkedin.val('');
  }
});
// Creates the section for the display of the Contact Lists
var ContactView = Backbone.View.extend({
  className: 'contact-info',
  events: {
  },
  //manages displaying new content
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderContact);
  },
  render: function(){
    return this;
  },
  //actually performs the rendering
  renderContact: function(contact){
    var contactItem = new ContactSingleView({model: contact});
    this.$el.append(contactItem.render().el);
  }
});

var ContactSingleView = Backbone.View.extend({
  className: 'person col-sm-6',
  template: contactTemplate,
  events: {
    'click .erase': 'nukeSelf'
  },
  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
  },
  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  },
  nukeSelf: function(event){
    event.preventDefault();
    this.model.destroy();
  }
});

module.exports = {
  'FormView' : FormView,
  'ContactView' : ContactView
};
