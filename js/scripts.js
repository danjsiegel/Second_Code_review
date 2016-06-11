var participants = function (parti) {
  return (parti == null || parti == "")
}
var tendies = function (option1, option2, option3, option4, option5) {
  return (option1 === 'old' && option4 === 'idk');
};
var python = function (option1, option2, option3, option4, option5) {
  return (option1 === "young" && option4 === "idk" );
};
var hawaii = function (option1, option2, option3, option4, option5) {
  return (option1 === 'old' || option1 === 'young' || option1 === 'middle-aged' && option3 >= 1 && option4 === 'african' || option4 === 'european')
}
$(document).ready(function() {
  $("form#vacay").submit(function() {
      event.preventDefault();
      var option1 = $("input:radio[name='agegroup']:checked").val();
      var option2 = $("#vacationtype").val();
      var parti = $("#number-of-people").val();
      var option3 = parseInt($(parti).val());
      var option4 = $("input:radio[name='swallowgroup']:checked").val();
      var option5 = $("#firstname").val()

      if (participants(parti)) {
        alert("I need an age")
      } else if (tendies(option1, option2, option3, option4, option5)) {
        $("#python").hide()
        $("#actualvacation").hide()
        $("#tendiesclass").show()
      } else if (python(option1, option2, option3, option4, option5)) {
        $("#python").show()
        $("#actualvacation").hide()
        $("#tendiesclass").hide()
      } else if (hawaii(option1, option2, option3, option4, option5)) {
        $("#python").hide()
        $("#actualvacation").show()
        $("#tendiesclass").hide()
      }
      });


});
