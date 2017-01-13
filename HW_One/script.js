let btn = document.getElementById("click");
let display = document.getElementById("print");


btn.addEventListener("click", function () {
    let sum = 0;
    let listOfNums = "";
    display.innerHTML = "";

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
                        for (let i = 0; i < object.data.length; i++) {
                            let result = Math.log(object.data[i]);
                            sum += result;
                            listOfNums += object.data[i] + ", "; 
                        }
                        listOfNums = listOfNums.replace(/,\s*$/, "");                        
                        display.innerHTML = 'The operation ' + '"'+ object.operation +'"' + ' applied to the array '+ listOfNums + ' gives a result of ' + sum + '.';

                    } else if (object.operation === "sine") {
                        for (let i = 0; i < object.data.length; i++) {
                            let result = Math.sin(object.data[i]);
                            sum += result;
                            listOfNums += object.data[i] + ", ";
                        }
                        listOfNums = listOfNums.replace(/,\s*$/, "");
                        display.innerHTML = 'The operation ' + '"'+ object.operation +'"' + ' applied to the array '+ listOfNums + ' gives a result of ' + sum + '.';

                    } else if (object.operation === "cosine") {
                        for (let i = 0; i < object.data.length; i++) {
                            let result = Math.cos(object.data[i]);
                            sum += result;
                            listOfNums += object.data[i] + ", ";
                        }
                        listOfNums = listOfNums.replace(/,\s*$/, "");                        
                        display.innerHTML = 'The operation ' + '"'+ object.operation +'"' + ' applied to the array '+ listOfNums + ' gives a result of ' + sum + '.';
                    } else if (object.operation === "square") {
                        for (let i = 0; i < object.data.length; i++) {
                            let result = Math.pow(object.data[i], 2);
                            sum += result;
                            listOfNums += object.data[i] + ", ";
                        }
                        listOfNums = listOfNums.replace(/,\s*$/, "");                        
                        display.innerHTML = 'The operation ' + '"'+ object.operation +'"' + ' applied to the array '+ listOfNums + ' gives a result of ' + sum + '.';
                        
                    } else {
                        for (let i = 0; i < object.data.length; i++) {
                            let result = Math.pow(object.data[i], 3);
                            sum += result;
                            listOfNums += object.data[i] + ", ";
                        }
                        listOfNums = listOfNums.replace(/,\s*$/, "");                        
                        display.innerHTML = 'The operation ' + '"'+ object.operation +'"' + ' applied to the array '+ listOfNums + ' gives a result of ' + sum + '.';              
                    }
                }
            }
        }

    }
})