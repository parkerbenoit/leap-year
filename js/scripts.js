// Business Logic
function isLeapYear(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

//UI Logic
$(document).ready(function() {
    $("form.leapYear").click(function(event) {
      let year = $("input.userYear").val();
      const boolean = isLeapYear(year);
      $(".return").text(boolean);
      event.preventDefault();
   });
});