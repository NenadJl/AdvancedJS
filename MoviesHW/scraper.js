let mjs = [];

$(".lister-list tr").each(function () {

    let title = $(this).find(".titleColumn a").text();
    let rating = $(this).find(".ratingColumn strong").text();
    let url = $(this).find(".titleColumn a").attr("href")
    let imgUrl = $(this).find(".posterColumn img").attr("src");

    let movie = {
        title: title,
        rating: rating,
        url: `http://www.imdb.com/${url}`,
        imageURL: imgUrl
    }

    mjs.push(movie);
})

JSON.stringify(mjs);