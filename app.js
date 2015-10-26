$(function(){
  $('button').click(function (event) {
    event.preventDefault();
    var value = $(this).val();
    var promise = $.ajax({
      url:'http://api.giphy.com/v1/gifs/search',
      method: "GET",
      data: {
        q: value,
        api_key: 'dc6zaTOxFJmzC',
        limit: 100
      },
    });
    promise.done(function(data) {
      console.log(data);
      $('#gif').html('');
       data.data.forEach(function (gif) {
         $('#gif').append('<a href="' + gif.bitly_gif_url + '"><img src="' + gif.images.original.url + '">');
       });
    });
    promise.error(function(error) {
      console.log(error);
    });
  });
});
