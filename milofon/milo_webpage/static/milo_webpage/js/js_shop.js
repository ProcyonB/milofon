// window.addEventListener("beforeunload", (event) => {
//   // Cancel the event as stated by the standard.
//   event.preventDefault();
//   // Chrome requires returnValue to be set.
//   if (total_price !== 0) {
//     event.returnValue = "";
//   }
// });

// зависимости от размера
size = document.getElementsByName("size");
colors = document.getElementsByName("color");
count_of_leafs = document.getElementsByName("count");
etching = document.getElementsByName("etching");
bag = document.getElementById("bag");
leafs_count = document.getElementById("10");
min_leafs_count = document.getElementById("8");
leafs_shape = document.getElementById("leafs");
cosm_price = document.getElementById("космос");
burning_price = document.getElementById("обжиг");
bag_price = 0;

total_price = 0;
size_price = 0;
leafs_price = 0;
color_price = 0;
etching_price = 0;

const characterList = document.querySelector(".constructor");
characterList.addEventListener("click", counting);

for (i = 0; i < size.length; i++) {
  if (size[i].value === "22 cm") {
    size[i].onchange = function () {
      cosm_price.innerHTML = 400;
      burning_price.innerHTML = 600;
      document.getElementById("сумка").innerHTML = 500;

      // цена от листьев+зависимости+изменение картинки
      document.getElementById("сумка").innerHTML = 500;
      leafs_count.onchange = function () {
        document.getElementById("rectangle_shape").src =
          "/static/milo_webpage/src/rectangle_10.svg";
        document.getElementById("geometry_shape").src =
          "/static/milo_webpage/src/geometry_10.svg";
        leafs_shape.disabled = "disabled";
        $(".with_tooltip").toggleClass("tooltip");
        leafs_price = 400;
        counting();
      };

      min_leafs_count.onchange = function () {
        document.getElementById("rectangle_shape").src =
          "/static/milo_webpage/src/rect-shape.svg";
        document.getElementById("geometry_shape").src =
          "/static/milo_webpage/src/geometry-shape.svg";
        document.getElementById("leafs_shape").src =
          "/static/milo_webpage/src/leaf-shape.svg";
        leafs_shape.disabled = "";
        $(".with_tooltip").toggleClass("tooltip");
        leafs_price = 0;
        counting();
      };
      // цена от оформления
      document.getElementById("coloration").onchange = () => {
        for (i = 0; i < etching.length; i++) {
          etching[i].disabled = "disabled";
          etching[i].checked = false;
          $(".color_tooltip").addClass("tooltip");
          etching_price = 0;
        }
        color_price = 0;
        counting();
      };
      document.getElementById("cosmos").onchange = () => {
        for (i = 0; i < etching.length; i++) {
          etching[i].disabled = "disabled";
          etching[i].checked = false;
          $(".color_tooltip").addClass("tooltip");

          etching_price = 0;
        }
        color_price = 400;
        counting();
      };
      counting();
    };
  } else {
    size[i].onchange = function () {
      leafs_shape.disabled = "";
      cosm_price.innerHTML = 600;
      burning_price.innerHTML = 800;
      document.getElementById("сумка").innerHTML = 600;
      // цена от листьев+зависимости
      leafs_count.onchange = function () {
        document.getElementById("rectangle_shape").src =
          "/static/milo_webpage/src/rectangle_10.svg";
        document.getElementById("geometry_shape").src =
          "/static/milo_webpage/src/geometry_10.svg";
        document.getElementById("leafs_shape").src =
          "/static/milo_webpage/src/leafs_10.svg";
        leafs_price = 400;
        counting();
      };
      min_leafs_count.onchange = function () {
        document.getElementById("rectangle_shape").src =
          "/static/milo_webpage/src/rect-shape.svg";
        document.getElementById("geometry_shape").src =
          "/static/milo_webpage/src/geometry-shape.svg";
        document.getElementById("leafs_shape").src =
          "/static/milo_webpage/src/leaf-shape.svg";
        leafs_price = 0;
        if (bag.checked) {
          bag_price = 500;
          counting();
        }
        counting();
      };
      // цена от оформления
      document.getElementById("coloration").onchange = () => {
        for (i = 0; i < etching.length; i++) {
          etching[i].disabled = "disabled";
          etching[i].checked = false;
          $(".color_tooltip").addClass("tooltip");
          etching_price = 0;
        }
        color_price = 0;
        counting();
      };
      document.getElementById("cosmos").onchange = () => {
        for (i = 0; i < etching.length; i++) {
          etching[i].disabled = "disabled";
          etching[i].checked = false;
          $(".color_tooltip").addClass("tooltip");
          etching_price = 0;
        }
        color_price = 600;
        counting();
      };
      if (bag.checked) {
        bag_price = 600;
        counting();
      }
      counting();
    };
  }
}

// зависимости от цвета
for (i = 0; i < colors.length; i++) {
  if (colors[i].value !== "обжиг") {
    colors[i].onchange = function () {
      for (i = 0; i < etching.length; i++) {
        etching[i].disabled = "disabled";
        etching[i].checked = false;
        $(".color_tooltip").addClass("tooltip");

        etching_price = 0;
      }
      counting();
    };
  } else {
    colors[i].onchange = function () {
      for (i = 0; i < etching.length; i++) {
        etching[i].disabled = "";
        $(".color_tooltip").removeClass("tooltip");
      }
    };
  }
}
bag.onchange = () => {
  if (bag.checked == false) {
    bag_price = 0;
    counting();
  } else {
    bag_price = +document.getElementById(bag.value).innerHTML;
    counting();
  }
};
// подсчеты
function counting() {
  for (i = 0; i < size.length; i++) {
    if (size[i].checked) {
      size_price = +document.getElementById(size[i].value).innerHTML;
    }
  }
  for (i = 0; i < count_of_leafs.length; i++) {
    if (count_of_leafs[i].checked) {
      leafs_price = +document.getElementById(count_of_leafs[i].value).innerHTML;
    }
  }
  for (i = 0; i < colors.length; i++) {
    if (colors[i].checked) {
      color_price = +document.getElementById(colors[i].value).innerHTML;
    }
  }
  for (i = 0; i < etching.length; i++) {
    if (etching[i].checked) {
      etching_price = +document.getElementById(etching[i].value).innerHTML;
    }
  }
  if (bag.checked) {
    bag_price = +document.getElementById(bag.value).innerHTML;
  }

  total_price =
    size_price + leafs_price + color_price + etching_price + bag_price;
  document.getElementById("total_price").innerHTML = total_price;
  document.getElementById("fixed").innerHTML = total_price;
  console.log("click");
}
$(".remove").on("click", function () {
  for (i = 0; i < etching.length; i++) {
    etching[i].checked = false;
    etching_price = 0;
  }
});
