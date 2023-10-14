function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector("#profile img");

    if (html.classList.contains("light")) {
        img.setAttribute("src", "assets/img/avatar-light.jpeg");
        img.setAttribute("alt", "Avatar 16 bits desenvolvedor loiro com barba, usando computador e fundo claro");
    } else {
        img.setAttribute("src", "assets/img/avatar.jpeg");
        img.setAttribute("alt", "Avatar 16 bits desenvolvedor loiro com barba, usando computador e fundo escuro");
    }
}