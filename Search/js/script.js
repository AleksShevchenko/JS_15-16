'use strict';

$(document).ready(function() {
  function getPixabayJson(word, count) {
    $.ajax({
      url: 'https://pixabay.com/api/?key=2506275-f30addddea12a14e13f6c6e1d&q=' + word + '&image_type=photo&per_page=' + count
    })
    .done(function(data) {

      console.log(data);

      $('.image-display').html('');
      if (data.hits === 0) {
        $('.image-display').append('<p>Sorry no images found, try again.</p>');
      } else {
        for (var i = 0; i < count; i++) {
          if (data.hits[i] == undefined){
            $('.image-display').append('<p class="not-found">Sorry no images found, try again.</p>');
        break};
           
          var imgSrc = data.hits[i].webformatURL;
          $('.image-display').append('<img src="' + imgSrc + '">');
        }
       }
    });
   };

  $('.search-btn').on('click', function(ev) {
  ev.preventDefault();

  var searchWord = $('.img-search').val();
  getPixabayJson(searchWord, 12);
  });
});
