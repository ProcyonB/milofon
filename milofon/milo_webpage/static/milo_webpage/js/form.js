var csrftoken = Cookies.get("csrftoken");

$("#first_form").on("click", function (e) {
  e.preventDefault();
  // form_data = new FormData();
  // form_data.append("name", $("input[name=name]").val());
  // form_data.append("name", $("input[name=email]").val());
  // form_data.append("name", $("input[name=comment]").val());
  $.ajax({
    headers: { "X-CSRFToken": csrftoken },
    type: "POST",
    dataType: "text",
    url: "form",
    data: {
      name: $("input[name=name]").val(),
      email: $("input[name=email]").val(),
      message: $("textarea[name=comment]").val(),
    },
    cache: false,
    success: function (result) {
      $("input[name=name]").val("");
      $("input[name=email]").val("");
      $("textarea[name=comment]").val("");
      alert("данные отправлены");
    },
    error: function (result) {
      alert("Произошла ошибка. Попробуйте позже.");
    },
  });
});
