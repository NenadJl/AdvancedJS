let btn = document.getElementById("click");
let display = document.getElementById("print");

let neno = function (operation, listOfNums, sum) {
    return `The operation "${operation}" applied to the array ${listOfNums} gives a result of ${sum}.`;
}

let sum = function (array, operation) {
    let sum = 0;
    for (let item in array) {
        sum += operation(item);
    }
    return sum;
}

btn.addEventListener("click", function () {

    let baseRequestURL = "https://raw.githubusercontent.com/sedc-codecademy/sedc5-ajs/master/homework-tasks/task-1/";
    let requestForPath = new XMLHttpRequest();
    requestForPath.open('GET', baseRequestURL + "filelist.json", true);
    requestForPath.send(null);

    requestForPath.onreadystatechange = function () {
        if (requestForPath.readyState == XMLHttpRequest.DONE) {
            let arrOfPaths = JSON.parse(requestForPath.responseText);

            // take a path by random choice
            let randomPath = arrOfPaths[Math.floor(Math.random() * arrOfPaths.length)];


            let requestForData = new XMLHttpRequest();
            requestForData.open('GET', baseRequestURL + randomPath, true);
            requestForData.send(null);

            requestForData.onreadystatechange = function () {
                if (requestForData.readyState == XMLHttpRequest.DONE) {
                    let object = JSON.parse(requestForData.response);

                    if (object.operation === "log") {
                        display.innerHTML = neno(object.operation, object.data, sum(object.data, x => Math.log(x)));
                    } else if (object.operation === "sine") {
                        display.innerHTML = neno(object.operation, object.data, sum(object.data, x => Math.sin(x)));
                    } else if (object.operation === "cosine") {
                        display.innerHTML = neno(object.operation, object.data, sum(object.data, x => Math.cos(x)));
                    } else if (object.operation === "square") {
                        display.innerHTML = neno(object.operation, object.data, sum(object.data, x => x*x));
                    } else {
                        display.innerHTML = neno(object.operation, object.data, sum(object.data, x => x*x*x));                        
                    }
                }
            }
        }
    }
})

