$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var name = $("#person1").val();
    var appointment = $("#appointment").val();
    var date = $("#date").val();
    alert("date")
    var time1 = $("#time1").val();
    var time2 = $("#time2").val();
    alert("f");
    //var book = list(name, appointment, date, time);
    $(".person1").text(name);
    $(".appointment").text(appointment);
    $(".date").text(date);
    $(".time1").text(time1);
    $(".time2").text(time2);

  //  $(".btn").submit(book);
    $("#story").show();
    event.preventDefault();
    // alert("f");
  });
});
