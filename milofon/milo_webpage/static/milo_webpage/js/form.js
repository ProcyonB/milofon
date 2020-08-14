function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
const csrftoken = getCookie("csrftoken");

$("#first_form").on("click", function (e) {
  e.preventDefault();
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

$("#second_form_btn").on("click", function (e) {
  e.preventDefault();
  drum_size = "";
  drum_leafs_count = "";
  drum_color = "";
  drum_etching = "Нет";
  drum_bag = "";
  drum_sticks = "";
  drum_shape = "";

  size = document.getElementsByName("size");
  colors = document.getElementsByName("color");
  count_of_leafs = document.getElementsByName("count");
  shape = document.getElementsByName("shape");
  etching = document.getElementsByName("etching");
  bag = document.getElementById("bag");
  sticks = document.getElementById("sticks");
  // checked_size = "";
  // checked_color = "";
  // checked_count_of_leaf = "";
  // checked_etching = "";
  // checked_shape = "";
  total_price = 0;
  size_price = 0;
  leafs_price = 0;
  color_price = 0;
  etching_price = 0;
  bag_price = 0;

  for (i = 0; i < size.length; i++) {
    if (size[i].checked) {
      drum_size = size[i].value;
      // checked_size = +i;
      size_price = +document.getElementById(size[i].value).innerHTML;
    }
  }
  for (i = 0; i < count_of_leafs.length; i++) {
    if (count_of_leafs[i].checked) {
      drum_leafs_count = count_of_leafs[i].value;
      // checked_count_of_leaf = +i;
      leafs_price = +document.getElementById(count_of_leafs[i].value).innerHTML;
    }
  }
  for (i = 0; i < shape.length; i++) {
    if (shape[i].checked) {
      drum_shape = shape[i].value;
      // checked_shape = +i;
    }
  }
  for (i = 0; i < colors.length; i++) {
    if (colors[i].checked) {
      drum_color = colors[i].value;
      // checked_color = +i;
      color_price = +document.getElementById(colors[i].value).innerHTML;
    }
  }

  for (i = 0; i < etching.length; i++) {
    if (etching[i].checked) {
      drum_etching = etching[i].value;
      // checked_etching = +i;
      etching_price = +document.getElementById(etching[i].value).innerHTML;
    }
  }
  if (bag.checked) {
    drum_bag = "Да";
    bag_price = +document.getElementById(bag.value).innerHTML;
  } else {
    drum_bag = "Нет";
  }
  if (sticks.checked) {
    drum_sticks = "Да";
  } else {
    drum_sticks = "Нет";
  }
  total_price =
    size_price + color_price + etching_price + bag_price + leafs_price;

  $.ajax({
    headers: { "X-CSRFToken": csrftoken },
    type: "POST",
    dataType: "text",
    url: "form_shop",
    data: {
      drum__size: drum_size,
      size__price: size_price,
      drum__leafs_count: drum_leafs_count,
      leafs__price: leafs_price,
      drum__color: drum_color,
      color__price: color_price,
      drum__etching: drum_etching,
      etching__price: etching_price,
      drum__bag: drum_bag,
      bag__price: bag_price,
      drum__sticks: drum_sticks,
      drum__shape: drum_shape,
      total__price: total_price,
      name: $("input[name=name]").val(),
      email: $("input[name=email]").val(),
      phone: $("input[name=phone]").val(),
      social: $("input[name=social]").val(),
      message: $("textarea[name=comment]").val(),
    },
    cache: false,
    success: function (result) {
      $("input[name=name]").val("");
      $("input[name=email]").val("");
      $("input[name=phone]").val("");
      $("input[name=social]").val("");
      $("textarea[name=comment]").val("");
      // size[checked_size].checked = false;
      // colors[checked_color].checked = false;
      // count_of_leafs[checked_count_of_leaf].checked = false;
      // shape[checked_shape].checked = false;
      // etching[checked_etching].checked = false;
      // bag.checked = false;
      // sticks.checked = false;
      // document.getElementById("total_price").innerHTML = 0;
      // document.getElementById("fixed").innerHTML = 0;
      alert("данные отправлены  ");
    },
    error: function (result) {
      alert("Произошла ошибка. Попробуйте позже.");
    },
  });
});
