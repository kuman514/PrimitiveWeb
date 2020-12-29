function openTextFile () {
    var input = document.createElement("input");

    input.type = "file";
    input.accept = "text/plain, text/html";

    input.click();
    input.onchange = function (event) {
        console.log(event.target.files[0]);
        processFile(event.target.files[0]);
    }
}

function processFile (file) {
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");

    reader.onload = function () {
        output.innerText = reader.result;
    }
}
