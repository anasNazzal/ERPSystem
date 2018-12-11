// $(".li1").click(function () {
//   $(".tab").hide();
//   $(".tabnmbr1").toggle();
// });




// $(".li2").click(function () {
//   $(".tab").hide();
//   $(".tabnmbr2").toggle();
// });




// $(".li3").click(function () {
//   $(".tab").hide();
//   $(".tabnmbr3").toggle();
// });



// $(".li4").click(function () {
//   $(".tab").hide();
//   $(".tabnmbr4").toggle();
// });



// $(".li5").click(function () {
//   $(".tab").hide();
//   $(".tabnmbr5").toggle();
// });



// $(".li6").click(function () {
//   $(".tab").hide();
//   $(".tabnmbr6").toggle();
// });



// $(".li7").click(function () {
//   $(".tab").hide();
//   $(".tabnmbr7").toggle();
// });



// $(".li8").click(function () {
//   $(".tab").hide();
//   $(".tabnmbr8").toggle();
// });




$(document).mouseup(function (e) {
  var container = $(".tab"); // YOUR CONTAINER SELECTOR

  if (!container.is(e.target) // if the target of the click isn't the container...
    && container.has(e.target).length === 0) // ... nor a descendant of the container
  {
    container.hide();
  }
});





var userCode = $("#userCode");
$('#Enter').click(function () {
  $('#userCode').each(function () {
    if ($(this).val().trim() == '') {
      $(this).addClass("errorInput");
      $("#userCodeAlert").show()
    }
    else {
      $(this).removeClass("errorInput");
      $("#userCodeAlert").hide()
    }
  });
});



var password = $("#password");
$('#Enter').click(function () {
  $('#password').each(function () {
    if ($(this).val().trim() == '') {
      $(this).addClass("errorInput");
      $("#passwordAlert").show()
    }
    else {
      $(this).removeClass("errorInput");
      $("#passwordAlert").hide()
    }
  });
});



var password = $("#branchCode");
$('#Enter').click(function () {
  $('#branchCode').each(function () {
    if ($(this).val().trim() == '') {
      $(this).addClass("errorInput");
      $("#branchCodeAlert").show()
    }
    else {
      $(this).removeClass("errorInput");
      $("#branchCodeAlert").hide()
    }
  });
});




var password = $("#data");
$('#Enter').click(function () {
  $('#data').each(function () {
    if ($(this).val().trim() == '') {
      $(this).addClass("errorInput");
      $("#dataAlert").show()
    }
    else {
      $(this).removeClass("errorInput");
      $("#dataAlert").hide()
    }
  });
});
$(document).ready(function () {

  $(".mainGrid").find('input').attr('disabled', 'disbaled')
  $(".mainGrid").find('select').attr('disabled', 'disbaled')


});
function addrow() {
  $(".mainGrid").append('<div class="row animated fadeIn faster"><input type="text-box" class="col-sm" value="" name=""><input type="text-box" class="col-sm" value="" name=""> <input type="text-box" class="col-sm" value="" name=""><select class="col-sm"><option> نعم </option><option>  لا </option></select><div class="col-sm-2 insideGrid overFlow"><button class="add hvr-grow"><i class="fas fa-save"></i> حــفظ </button></div></div> ')
}



function enable1() {
  $(".row1 input").prop('disabled', false);
  $(".row1 select").prop('disabled', false);
}


function enable2() {
  $(".row2 input").prop('disabled', false);
  $(".row2 select").prop('disabled', false);
}



function enable3() {
  $(".row3 input").prop('disabled', false);
  $(".row3 select").prop('disabled', false);
}



function enable4() {
  $(".row4 input").prop('disabled', false);
  $(".row4 select").prop('disabled', false);
}




$("#edit1").click(function () {
  $(".btn1").hide()
  $(".addInside1").show()

});



$("#edit2").click(function () {
  $(".btn2").hide()
  $(".addInside2").show()

});



$("#edit3").click(function () {
  $(".btn3").hide()
  $(".addInside3").show()

});



$("#edit4").click(function () {
  $(".btn4").hide()
  $(".addInside4").show()

});






$(".option1").click(function () {
  $(".closeMain").hide('500')
  $(".tab").hide()
  $(".branches").show('500')
});



$(".system-man").click(function () {
  $(".closeMain").hide('500')
  $(".tab").hide()
  $(".system-man-div").show('500')
});
