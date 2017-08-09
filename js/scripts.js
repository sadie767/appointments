$(document).ready(function() {
  debugger;
  $("#formOne").submit(function(event) {
    var name = $("input#person1").val();
    var appointment = $("input#appointment").val();
    var date = $("input#date").val();
    var time1 = $("input#time1").val();
    var time2 = $("input#time2").val();
    //var book = list(name, appointment, date, time);
    $(".person1").text(name);
    $(".appointment").text(appointment);
    $(".date").text(date);
    $(".time1").text(time1);
    $(".time2").text(time2);

    //$(".btn").submit(book);
    $("#story").show();
    event.preventDefault();
  });
});
