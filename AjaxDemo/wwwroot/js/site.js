$(document).ready(function(){
    $('.hello-ajax').click(function() {
        $.ajax({
            type: 'GET',
            url: '/Home/HelloAjax',
            success: function(result) {
                $('#result1').append(result);
            }
        });
    });

    $('.sum').click(function() {
        $.ajax({
            type: 'GET',
            data: {firstNumber: 5, secondNumber: 2},
            url: '/Home/Sum',
            success: function(result) {
                $('#result2').html(result);
            }
        });
    });

    $('.display-object').click(function(){
        $.ajax({
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            url: '/Home/DisplayObject',
            success: function (result){
                var resultString = 'Id: ' + result.id + '<br>City: ' + result.city + '<br>Country: ' + result.country;
                $('#result3').html(resultString);
             }
        });
    });

    $('.display-view').click(function(){
        $.ajax({
            type:'GET',
            dataType: 'html',
            url: '/Home/DisplayViewWithAjax',
            success: function (result) {
                $('#result4').html(result);
            }
        });
    });

    $('.display-random-database-items').submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: '/Home/RandomDestinationList',
            type: 'GET',
            data: $(this).serialize(),
            dataType: 'json',
            success: function(result) {
                var stringResult = '<ul>';
                for (var i = 0; i < result.length; i++) {
                    stringResult += '<li>' + result[i].city + ', ' + result[i].country + '</li>';
                }
                stringResult += '</ul>';
                $('#result5').html(stringResult);
            }
        });
    });

    $('.new-destination').submit(function(event){
        event.preventDefault();
        $.ajax({
            url: '/Home/NewDestination',
            type: 'POST',
            dataType: 'json',
            data: $(this).serialize(),
            success: function (result) {
                var resultMessage = 'You\'ve added a new destination to the database!<br>Id: ' + result.id + '<br>City: ' + result.city + '<br>Country: ' + result.country;
                $('#result6').html(resultMessage);
            }
        });
    });
});