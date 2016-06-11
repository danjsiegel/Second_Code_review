var tendies = function (option1, option2, option3, option4, option5) {
  return (option1 === 'old' && option4 === 'idk');
};
var python = function (option1, option2, option3, option4, option5) {
  return (option1 === "young" || option1 === "middle-aged" || option1 === "old" && option3 >= 1 && option4 !== "idk" );

}
$(document).ready(function() {
  $("form#vacay").submit(function() {
      event.preventDefault();
      var option1 = $("input:radio[name='agegroup']:checked").val();
      var option2 = $("#vacationtype").val();
      var option3 = parseInt($("#number-of-people").val());
      var option4 = $("input:radio[name='swallowgroup']:checked").val();
      var option5 = $("#firstname").val()
      if (tendies(option1, option2, option3, option4, option5)) {
        $("#python").hide()
        $("#actualvacation").hide()
        $("#tendiesclass").show()
      } else if (python(option1, option2, option3, option4, option5)) {
        $("#python").show()
        $("#actualvacation").hide()
        $("#tendiesclass").hide()
      }
      });


});
