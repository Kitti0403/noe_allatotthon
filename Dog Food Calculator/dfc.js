jQuery(function($){

    $(document).ready(function(){

        $("#dog_weight").hide();
        $("#dog_weight_heading").hide();
        $("#puppy_weight").hide();
        $("#puppy_weight_heading").hide();
        $("#result-wrapper").hide();
        $("#dog-weight-container").hide();

        $("#adult").click(function(){
            $("#dog-weight-container").show();
            $("#dog_weight").show();
            $("#dog_weight_heading").show();
            $("#puppy_weight").hide();
            $("#puppy_weight_heading").hide();
            $("#body_weight").val("");
            $("#selectbasic2").val("");
        });

        $("#puppy").click(function(){
            $("#dog-weight-container").show();
            $("#puppy_weight").show();
            $("#puppy_weight_heading").show();
            $("#dog_weight").hide();
            $("#dog_weight_heading").hide();
            $("#body_weight").val("");
            $("#selectbasic2").val("");

        });

        $("#calculate").click(function(){
            $("#result-wrapper").show();

        //    $("#dog_weight").hide();
            if($("#puppy").val()=='puppy' && $("#puppyage").val()=='2') {
                $('#result').val($('#body_weight').val() * 1000 *  9 / 100);
                $('.result').text($('#body_weight').val() * 1000 *  9 / 100);
            }

            if($("#puppy").val()=='puppy' && $("#puppyage").val()=='3') {
                $('#result').val($('#body_weight').val() * 1000 *  7.5 / 100);
                $('.result').text($('#body_weight').val() * 1000 *  7.5 / 100);
            }

            if($("#puppy").val()=='puppy' && $("#puppyage").val()=='4') {
                $('#result').val($('#body_weight').val() * 1000 *  6.5 / 100);
                $('.result').text($('#body_weight').val() * 1000 *  6.5 / 100);
            }

            if($("#puppy").val()=='puppy' && $("#puppyage").val()=='5') {
                $('#result').val($('#body_weight').val() * 1000 *  5.5 / 100);
                $('.result').text($('#body_weight').val() * 1000 *  5.5 / 100);
            }

            if($("#puppy").val()=='puppy' && $("#puppyage").val()=='6') {
                $('#result').val($('#body_weight').val() * 1000 *  4.5 / 100);
                $('.result').text($('#body_weight').val() * 1000 *  4.5 / 100);
            }

            if($("#puppy").val()=='puppy' && $("#puppyage").val()=='7') {
                $('#result').val($('#body_weight').val() * 1000 *  3.5 / 100);
                $('.result').text($('#body_weight').val() * 1000 *  3.5 / 100);
            }

            if($("#puppy").val()=='puppy' && $("#puppyage").val()=='8') {
                $('#result').val($('#body_weight').val() * 1000 *  3 / 100);
                $('.result').text($('#body_weight').val() * 1000 *  3 / 100);
            }

            if($("#puppy").val()=='puppy' && $("#puppyage").val()=='9') {
                $('#result').val($('#body_weight').val() * 1000 *  2.5 / 100);
                $('.result').text($('#body_weight').val() * 1000 *  2.5 / 100);
            }

            if($("#adult").val()=='adult' && $("#selectbasic2").val()=='2') {
                $('#result').val($('#body_weight').val() * 1000 *  1.5 / 100);
                $('.result').text($('#body_weight').val() * 1000 *  1.5 / 100);
            }

            if($("#adult").val()=='adult' && $("#selectbasic2").val()=='3') {
                $('#result').val($('#body_weight').val() * 1000 *  2 / 100);
                $('.result').text($('#body_weight').val() * 1000 *  2 / 100);
            }

            if($("#adult").val()=='adult' && $("#selectbasic2").val()=='4') {
                $('#result').val($('#body_weight').val() * 1000 *  2.5 / 100);
                $('.result').text($('#body_weight').val() * 1000 *  2.5 / 100);
            }

        });

        // $("#result").text($(".c-raw-dog-food-calculator__result .result").val());

    });

});


