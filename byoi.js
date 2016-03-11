var main = function() {
  /* Global Variables */
  var preferencesState = 0;

  /* Hides the preferencesMenu on page load */
  $(".preferencesMenu").hide();
  $("#splitButton").hide();

  /* Sends the string in the messageBox when the sendButton is clicked */
  $('.sendButton').click(function() {
    $('.messageField').val($('.textBox').val());
  });

  /* Rotates the preferencesCog when its clicked to wind and unwind the preferencesMenu */
  $("#preferencesCog").rotate({
    bind: {
      click: function() {
        if (preferencesState === 0) {
          $(this).rotate({
            animateTo: 180
          });
          preferencesState = 1;
        } else {
          $(this).rotate({
            animateTo: 0
          });
          preferencesState = 0;
        }
      }
    }
  });

  /* Toggles if the preferencesMenu is displayed when the preferencesButton is clicked */
  $(".preferencesButton").click(function() {
    $(".preferencesMenu").slideToggle('slow');
  });

};

$(document).ready(main);
