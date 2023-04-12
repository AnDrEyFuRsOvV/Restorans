export default function(){
    // Set the value of the selected city to the hidden input field
    $('select#cities').on('change', function() {
        $('input[name="city"]').val(this.value);
    });
}