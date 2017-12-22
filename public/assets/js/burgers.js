$(function() {
  $(".change-devoured").on("click", function(event) {
    let id = $(this).data("id");
    let newDevoured = $(this).data("newdevoured");
    let newDevouredState = {
      devoured: newDevoured
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    let newBurger = {
      name: $("#burger").val().trim(),
      devoured: $("input[name='devoured']:checked").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});
