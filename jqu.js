$("#submit").on('click',function () {
    console.log(this);
    let name = $("#name");
    let email = $("#email");
    let phone = $("#phone");
    let message = $("#message-text");
    console.log(name);
  
    const required = [name, email, phone];
  
    for (var i = 0; i < required.length; i++) {
      if (required[i].val() === "") {
        $("#message").html("Please Fill Out Required Fields");
        $("#message").addClass("warning");
        required[i].prev().addClass("warning");
      } else {
        required[i].prev().removeClass("warning");
      }
    }
  
    if (!$("label").hasClass("warning")) {
      $("form").remove();
      $("h2").html("Thanks for your feedback!");
    }
  });