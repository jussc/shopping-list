$(document).ready(function() {

  var xIcon = '<i class="fa fa-times-circle-o fa-2x left"></i>';
  var checkMark = '<i class="fa fa-check-circle-o fa-2x right"></i>';
  var arrow = '<i class="fa fa-arrow-circle-o-left fa-2x right"></i>';

function enterItem() {
  $('#add-item').keydown(function(e) {
      if (e.keyCode == 13) {
        // console.log('test');
        addItem();
      }
  });
}

enterItem();

function addItem() {

    if( $('#add-item').val().trim().length == 0 ) {
        // IF THE USER HAS NOT ENTERED TEXT

        $('.error').show();
        $('input#add-todo').val("");

    } else { 

    $('.list ul').append('<li>' + xIcon + $('input#add-item').val() + checkMark + '</li>');
    $('input#add-item').val("");
    $('.error').hide();

    };  
  
  }

/* Delete Items */

$(document).on("click", ".left", function(){
    $(this).closest('li').fadeOut(700);
  });

/* Check Off Items */

$(document).on("click", ".right", function() {
    if (!$(this).closest('li').hasClass('done')) {
        $(this).closest('li').toggleClass('done');
        // checkMark = arrow;
        // $(this).siblings('.delete').toggleClass("alt-delete");
   }
   else {
        $(this).closest('li').removeClass('done');
   }

  });

/* Clears List */

  $(document).on("click", ".clear", function(){
    $(".list ul").empty();
  });

});



