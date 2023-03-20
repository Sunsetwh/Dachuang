const converter = new showdown.Converter();
const markdownUrl = "static/output.md";
fetch(markdownUrl)
    .then(response => response.text())
    .then(markdownText => {
        const htmlText = converter.makeHtml(markdownText);
        document.getElementById("markdown").innerHTML = htmlText;
    });