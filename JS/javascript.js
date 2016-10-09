// alert("hello world");
// On check mark, strike through text
$(function(){
   $(document).on("click", "#sel1", function(event){
        var value = $('#dropdown1').val();
        if(value == "Urgent" ){
          var class_name = "label label-danger";
        }
        else if (value == "Coming Up"){
          var class_name = "label label-warning"}
        else if (value == "Low Priority"){
          var class_name = "label label-success"}
        var input= $("#usr").val();
        $(".list-group").append("<li class=\"list-group-item\"><label class=\"checkbox-inline\"><input type=\"checkbox\" class=\"check\" value=\"\">"+input+"</label><span class=\""+class_name+"\" style=\"float:right\">"+value+"</span></span></li>");
   }); 
});

// event listener 
$('.list-group').on('click', '.check', function(){
    // do something
    if (this.checked) {
      $(this).closest('li').fadeOut(500, function(){$(this).closest('li').remove();});
    }
});


        


// Delete a to-do item from list



// Add a to-do item to list


// Assign labels when adding to-do item
