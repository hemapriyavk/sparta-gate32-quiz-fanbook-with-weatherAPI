$(document).ready(function(){
    alert('Loading is completed!');
    $.ajax({
        type: "GET",
        url: "http://spartacodingclub.shop/sparta_api/weather/seoul",
        data: {},
        success: function (response){
            let temperature = response['temp'];
            $("#temp").text(temperature);
        }
    })
})