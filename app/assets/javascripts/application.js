// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
// require turbolinks
//= require angular
//= require angular-resource
//= require app/main
//= require app/factories/feed_factory
//= require app/factories/item_factory
//= require app/controllers/application_controller
//= require app/controllers/mainnav_controller
//= require app/controllers/home_controller
//= require app/controllers/news_controller
//= require app/controllers/feeds_controller
//= require app/controllers/feeds_show_controller
//= require app/controllers/feeds_new_controller
//= require app/controllers/feeds_edit_controller
//= require app/controllers/items_show_controller
//= require app/controllers/contact_controller
// require_tree .
//= require_self

$(function() {


  // mozilla persona
	var currentUser = 'bob@example.com';

  navigator.id.watch({
    loggedInUser: currentUser,
    onlogin: function(assertion) {
      // A user has logged in! Here you need to:
      // 1. Send the assertion to your backend for verification and to create a session.
      // 2. Update your UI.
      $.ajax({ /* <-- This example uses jQuery, but you can use whatever you'd like */
        type: 'POST',
        url: '/auth/login', // This is a URL on your website.
        data: {assertion: assertion},
        //success: function(res, status, xhr) { window.location.reload(); },
        success: function(res, status, xhr) { alert('Estas logeado en Persona'); },
        error: function(xhr, status, err) {
          navigator.id.logout();
          alert("Login failure: " + err);
        }
      });
    },
    onlogout: function() {
      // A user has logged out! Here you need to:
      // Tear down the user's session by redirecting the user or making a call to your backend.
      // Also, make sure loggedInUser will get set to null on the next page load.
      // (That's a literal JavaScript null. Not false, 0, or undefined. null.)
      $.ajax({
        type: 'POST',
        url: '/auth/logout', // This is a URL on your website.
        //success: function(res, status, xhr) { window.location.reload(); },
        success: function(res, status, xhr) { alert("Estas desconectado de Persona"); },
        error: function(xhr, status, err) { alert("Logout failure: " + err); }
      });
    }
  
  });

});
