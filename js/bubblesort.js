/**
 * @file
 * Handles the autoplay for bubblesort.
 */

(function ($) {
  Drupal.behaviors.bubblesort = {
    attach: function (context, settings) {

      // Function to auto clicks on the step button and delay 1 second.
      var playSteps = function(){
        setTimeout(function(){
          $('#edit-step').unbind('click').click();
        },1000);
      };

      // If the form comes with 'Play' checked, then run it.
      if ($('.field-name-bubblesort-play').is(":checked")) {
        playSteps();
      }

      // First run of the play at the very first user click, with no delay.
      $('.field-name-bubblesort-play', context).click(function (e) {
        if ($(this).is(":checked")) {
          $('#edit-step').unbind('click').click();
        }
      });
    }
  };
}(jQuery));
