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
    $("form#leapYear").click(function(event) {
    event.preventDefault();
      let year = $("input#year").val();
      const boolean = isLeapYear(year);
      $("#output").text(boolean);
   });
});