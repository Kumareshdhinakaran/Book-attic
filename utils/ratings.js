$.fn.stars = function () {
  return $(this).each(function () {
    var rating = $(this).data("rating");
    var fullStar = new Array(Math.floor(rating + 1)).join(
      '<i class="fas fa-star"></i>'
    );
    var halfStar =
      rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : "";
    var noStar = new Array(
      Math.floor($(this).data("numStars") + 1 - rating)
    ).join('<i class="far fa-star"></i>');
    $(this).html(fullStar + halfStar + noStar);
  });
};