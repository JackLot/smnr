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
//= require bootstrap-sprockets
//= require blur.min
//= require_tree .

$(document).ready(function(){

  $('.section').css({'height': $(window).height()})

  $('.section.bg-1').blurjs({
    source: '.section.bg-1',
    radius: 10,
    overlay: 'rgba(0,100,100,0.1)'
  });


  $("#summoner-name-form").bind("ajax:beforeSend", function(evt, xhr, settings)
    {
      console.log("ajax:beforeSend");
      var temp = $(this).closest(".summoner-name-form-holder");
      temp.addClass("loading");
      temp.find(".alert").remove();
      $(this).find("input[type=text]").prop('disabled', true);

    })
    .bind("ajax:complete", function(evt, xhr, settings)
    {
      console.log("ajax:complete");
      $(this).find("input[type=text]").prop('disabled', false);
    })
    .bind("ajax:error", function(evt, xhr, settings, exception)
    {
      console.log("ajax:error");
      console.log(xhr)
      var holder = $(this).closest(".summoner-name-form-holder")

      holder.removeClass("loading");
      holder.append(new_alert("warning", "Summoner not found"))

    });
  
  function new_alert(alert_type, contents){

    icon = "fa-check"
    if(alert_type == "info")
      icon = "fa-info-circle"
    if(alert_type == "danger")
      icon = "fa-exclamation"
    if(alert_type == "warning")
      icon = "fa-exclamation-triangle"

    alert = $("<div/>").addClass("alert alert-inline alert-dismissable alert-" + alert_type).text(contents)
      .prepend($("<i/>").addClass("fa msg-icon " + icon))
    alert.prepend($("<button/>").addClass("close").attr("aria-hidden", true).data("dismiss", "alert").html("&times;").on('click', function(){alert.remove();}))

    return alert;
  }

});