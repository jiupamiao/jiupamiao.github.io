function highlightText() {
    var text2 = document.getElementById("text2");
    text2.classList.remove("normal");
    text2.classList.add("highlight");
    setTimeout(function() {
        text2.classList.remove("highlight");
        text2.classList.add("normal");
    }, 2000);
}
