document.getElementById("importButton").addEventListener("click", function() {
    let input = document.createElement("input");
    input.type = "file";
    input.accept = ".txt, .craftionList";
    input.addEventListener("change", function(event) {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = function(e) {
            let content = e.target.result;
            alert("Fichier importé : " + content);
        };
        reader.readAsText(file);
    });
    input.click();
});