
    // Set the value of the selected city to the hidden input field
    $('select#cities').on('change', function() {
        $('input[name="city"]').val(this.value);
    });
 //  Change image source on click event.
 //  @param {string} id - ID of the image element.
 function chg(id) {
    var el = document.getElementById('info-img');
    if (el.src.indexOf("images/info-img.svg") > 0) {
      el.src = "../images/info-close.svg"
    } else {
      el.src = "../images/info-img.svg"
    }
  }
  