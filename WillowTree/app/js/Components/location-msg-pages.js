// This function runs when the document is ready
$(document).ready(function () {
  // When an element with class "info" is clicked
  $(".info").click(function (event) {
    // Toggle the "active" class on both the "info" element and the "location__info-inner" element
    $(".info, .location__info-inner, .location__info").toggleClass("active");

    // Get the image element with ID "info-img"
    let el = document.getElementById("info-img");

    // Get all elements with class "info"
    let a = document.getElementsByClassName("info");

    // Get all elements with classes "info" and "active"
    let b = document.getElementsByClassName("info active");

    // Check if there is only one element with class "info" and no elements with classes "info" and "active"
    if (a.length === 1 && b.length === 0) {
      // If the source of the image contains the string "close.svg", change it to "info-img.svg"
      if (el.src.indexOf("images/close.svg") > 0) {
        el.src = "../images/info-img.svg";
      } else {
        // Otherwise, set the source to "info-img.svg"
        el = "../images/info-img.svg";
      }
    } else {
      // If there is more than one element with class "info" or at least one element with classes "info" and "active"

      // If the source of the image contains the string "info-img.svg", change it to "close.svg"
      if (el.src.indexOf("images/info-img.svg") > 0) {
        el.src = "../images/close.svg";
      } else {
        // Otherwise, set the source to "info-img.svg"
        el = "../images/info-img.svg";
      }
    }
  });
});

//  Change image source on click event.
//  @param {string} id - ID of the image element.
function chg(id) {
  var el = document.getElementById("info-img");
  if (el.src.indexOf("images/info-img.svg") > 0) {
    el.src = "../images/info-close.svg";
  } else {
    el.src = "../images/info-img.svg";
  }
}
