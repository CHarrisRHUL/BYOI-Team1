$(document).ready(function() {
  /* Global Variables */
  var preferencesState = 0;

  $("#main").hide();

  $("#connectButton").click(function() {
    $("#splitButton").hide();
    $("#connectButton").hide();
    $(".preferencesMenu").hide();
    $("#main").show();
  });

  $("#sendButton").click(function() {
    var msg = $("#msg").val();
    $("#messageList").append('<div class="message" tabindex="-1">'+msg+'</div>');
    $("#msg").val("");
  });

  $("#addButton").click(function() {
    $("#messageList").getSelectedMessages().toggleSelectMessage();
    var msg = $('<div class="added"><span class="text">' + $('#msg').val() + '</span>&nbsp;</div>').BYOIMessage();
    msg.relayMessage();
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

  // create a Message Handler
  $('#messageList').BYOIMessageHandler({
    accept: function(msg) {
      return true;
    },
    onError: function(msg) {
      BYOI.systemMessage(msg);
    }
  });
});
