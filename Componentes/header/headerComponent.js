function header() {
    let header = document.createElement('header');
    header.className = "headercontenedor";

    let text = document.createElement('h1');
    text.className = "header-texto";
    text.innerText = "@Jennifer";

    let div = document.createElement('div');
    div.className = "header-circulo";

    let img = document.createElement('img');
    img.className = "imagen";
    img.src = "https://images.seeklogo.com/logo-png/30/2/github-logo-png_seeklogo-304612.png"

    header.appendChild(text);
    header.appendChild(div);
    div.appendChild(img);

    return header;
    }

    export { header }