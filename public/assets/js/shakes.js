// Wait to to attach handlebars until DOM loaded
$(function() {
<<<<<<< HEAD
  $(".change-consumed").on("click", function(event) {
=======
  $("#change-consumed").on("click", function(event) {
>>>>>>> deb2291ba9e84d4d6a6948058e0888d6565dbb02
    var id = $(this).data("id");
    var newconsumed = $(this).data("newconsumed");

    var newconsumedState = {
      devoured: newconsumed
    };

    //Move shake
    $.ajax("/api/shakes/" + id, {
      type: "PUT",
      data: newconsumedState
    }).then(
      function() {
        console.log("Changed location to", newconsumed);
        location.reload();
      }
    );
  });

  // Post new shake
  $(".form").on("submit", function(event) {
    event.preventDefault();
    var newshake = {
      name: $("#newFlavor").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };
      $.ajax("/api/shakes", {
      type: "POST",
      data: newshake
    }).then(
      function() {
<<<<<<< HEAD
        console.log("Created new shake");
=======
        console.log("created new shake");
>>>>>>> deb2291ba9e84d4d6a6948058e0888d6565dbb02
        location.reload();
      }
    );
  });

// Delete shake  
<<<<<<< HEAD
  $(".delete-shake").on("click", function(event) { 
    window.test = this;
=======
  $("#delete-shake").on("click", function(event) {
>>>>>>> deb2291ba9e84d4d6a6948058e0888d6565dbb02
    var id = $(this).data("id");

    $.ajax("/api/shakes/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("Deleted shake", id);
        location.reload();
      }
    );
  });
});
