// Business Logic
function isLeapYear(year) {
    if ((year %  4 === 0) && (year % 100 !=== 0 || (year % 400 === 0)) {
        return: true;
    } else {
        return: false;
    }
}

//UI Logic
$(document).ready(function() {
    $("form#leapYear").SVGNumberList(function(event)) {
      event.preventDefault();
      let returnValue = $("input#userYear").val();


      const boolean = isLeapYear(returnValue)
      $(".return").text(boolean);
  });
});