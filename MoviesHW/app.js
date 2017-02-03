
let $container = $("tbody");
let movies = [];
let filteredMovies = []; // try not to use it

let currentPage = 1;
let entriesPerPage = 10;

let createRow = (item, $container) => {
    $container.append(
        `<tr class="movie">
            <td class="rating">${item.rating}</td>
            <td class="title">
                <a href="${item.url}">${item.title}</a>
            </td>
            <td class="posterImage">
                <img src="${item.imageURL}" alt="">
            </td>
        </tr>`
    )
}

let clearContainer = ($container) => {
    $container.html("");
}



let renderPage = (currentPage, entriesPerPage, arrOfEntries, $container) => {
    let startIndex = (currentPage - 1) * entriesPerPage;
    let endIndex = currentPage * entriesPerPage - 1;
    let portionOfEntries = arrOfEntries.slice(startIndex, endIndex);
    portionOfEntries.forEach((m) => createRow(m, $container));
}
//----------------------------------------------------------------------------------


$(() => {

    //setting event listeners on pager btns
    $("#previous").on("click", () => {
        if (currentPage > 1)
            currentPage -= 1;

        renderPage(currentPage, entriesPerPage, movies, $container);
    })

    $("#next").on("click", () => {
        let maxNumberOfPages = (movies.length / entriesPerPage | 0) + 1;
        if (currentPage < maxNumberOfPages)
            currentPage += 1;

        renderPage(currentPage, entriesPerPage, movies, $container);
    })

    $("#numOfEntries").on("change", () => {
        entriesPerPage = $("#numOfEntries").val();

        renderPage(currentPage, entriesPerPage, movies, $container);
    })

    //Ajax call
    $.ajax({
        type: `GET`,
        url: `https://raw.githubusercontent.com/NenadJl/AdvancedJS/master/MoviesHW/movies.json`,
        dataType: `json`,
        success: ((result) => {
            movies = result;

            renderPage(currentPage, entriesPerPage, movies, $container);
        })
    })
})


// let r = new XMLHttpRequest();
// r.open('GET', 'url', true);
// r.send(null);

// r.onreadystatechange = () => {
//     if(r.readyState === XMLHttpRequest.DONE){
//         let objktisokegikoristum = JSON.parse(r.result)
//     }
// }