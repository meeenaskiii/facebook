$(document).ready(function(){
    $("form").validate({
        rules: {
            fname: {
                required: true
                
            }
        },
        messages: {
            fname: {
                required: "Please enter your first name"
            }
        }
    });
});
