$(document).ready(function() {
  $("button#bark").click(function() {
    $("ul#Dog").prepend("<li>Bark!</li>");
    $("ul#Cat").prepend("<li>meow</li>");
    $("ul#Dog").after("<img src=media/dog.png>");
      $("img").click(function() {
        $(this).remove();
      });
    $("ul#Cat").after("<img src=media/cat.jpg>");
      $("img").click(function() {
      $(this).remove();
      });
  });

  $("button#meow").click(function() {
    $("ul#Cat").prepend("<li>Meow!</li>")
    $("ul#Dog").prepend("<li>bark</li>")
    $("ul#Cat").after("<img src=media/cat2.jpeg>");
      $("img").click(function() {
        $(this).remove();
      });
    $("ul#Dog").after("<img src=media/dog2.jpeg>");
      $("img").click(function() {
        $(this).remove();
      });
  });
});
