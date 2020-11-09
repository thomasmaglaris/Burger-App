$(function () {
  $(".devoured").on("click", function (event) {
    console.log("click worked");
    var id = $(this).data("id");
    var devour = $(this).data("devour");

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: {
        devoured: 1,
      },
    }).then(function () {
      console.log("changed burger to", devour);
      // Reload the page to get the updated list
      location.reload();
    });
  });
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burg").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      mathod: "POST",
      data: { burger_name: newBurger },
    }).then(function () {
      console.log("burger logged");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
