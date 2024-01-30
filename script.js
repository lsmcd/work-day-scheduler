$(function () {
  $(".saveBtn").on("click", function(){
    localStorage.setItem(this.parent().attr("id"), this.parent().nth-child(1).text());
  });
  var addHourHtml = function(hour, backgroundColor){
    var container = $("#hours");
    var existsCheck = localStorage.getItem(hour);
    var text = "";
    if (typeof(existsCheck) === "string"){
      text = existsCheck;
    }
      
    container.add(
          `<div id="`+ hour +`" class="row time-block `+ backgroundColor + `">
          <div class="col-2 col-md-1 hour text-center py-3">`+ hour +`</div>
          <textarea class="col-8 col-md-10 description" rows="3">`+ text +` </textarea>
          <button class="btn saveBtn col-2 col-md-1" aria-label="save">
            <i class="fas fa-save" aria-hidden="true"></i>
          </button>
        </div>`).appendTo("#hours");
    $(".saveBtn").on("click", function(){
      console.log();
      localStorage.setItem($(this).parent().attr("id"), $(this).prev().val());
    });
  }
  for (let i = 9; i <= 17; i++){
    var hour = dayjs().hour();
    if (i < hour){
      addHourHtml(dayjs().hour(i).format("hA"), "past")
    } else {

    }
    if (i === hour){
      addHourHtml(dayjs().hour(i).format("hA"), "present")
    } else {

    }
    if (i > hour ){
      addHourHtml(dayjs().hour(i).format("hA"), "future")
    }
  }
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));
});
