document.addEventListener("DOMContentLoaded", () => {
    // Função para alterar a cor do título ao passar o mouse
    const title = document.querySelector("h1");
    title.addEventListener("mouseover", () => {
        title.style.color = "#FFD700"; // Cor dourada ao passar o mouse
    });
    title.addEventListener("mouseout", () => {
        title.style.color = ""; // Volta à cor original
    });

    // Função para destacar o parágrafo ao clicar
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
        paragraph.addEventListener("click", () => {
            paragraph.style.backgroundColor = "#1b2028";
            paragraph.style.color = "white";
            paragraph.style.padding = "10px";
            paragraph.style.borderRadius = "10px";
        });
    });

    // Exibe uma mensagem de boas-vindas ao carregar a página
    const welcomeMessage = document.createElement("div");
    welcomeMessage.textContent = "Bem-vindo à página Sobre CS 1.6!";
    welcomeMessage.style.position = "fixed";
    welcomeMessage.style.top = "20px";
    welcomeMessage.style.left = "50%";
    welcomeMessage.style.transform = "translateX(-50%)";
    welcomeMessage.style.backgroundColor = "#0b1f2d";
    welcomeMessage.style.color = "#FFD700";
    welcomeMessage.style.padding = "15px 20px";
    welcomeMessage.style.borderRadius = "8px";
    welcomeMessage.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
    document.body.appendChild(welcomeMessage);

    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        welcomeMessage.remove();
    }, 5000);

    // Zoom da imagem ao passar o mouse
    const image = document.querySelector(".box img");
    image.addEventListener("mouseover", () => {
        image.style.transform = "scale(1.1)";
        image.style.transition = "transform 0.3s ease-in-out";
    });
    image.addEventListener("mouseout", () => {
        image.style.transform = "scale(1)";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Função para alterar a cor do título ao passar o mouse
    const title = document.querySelector("h1");
    title.addEventListener("mouseover", () => {
        title.style.color = "#FFD700"; // Cor dourada ao passar o mouse
    });
    title.addEventListener("mouseout", () => {
        title.style.color = ""; // Volta à cor original
    });

    // Função para destacar o parágrafo ao clicar
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
        paragraph.addEventListener("click", () => {
            paragraph.style.backgroundColor = "#1b2028";
            paragraph.style.color = "white";
            paragraph.style.padding = "10px";
            paragraph.style.borderRadius = "10px";
        });
    });

    // Exibe uma mensagem de boas-vindas ao carregar a página
    const welcomeMessage = document.createElement("div");
    welcomeMessage.textContent = "Bem-vindo à página Sobre CS 1.6!";
    welcomeMessage.style.position = "fixed";
    welcomeMessage.style.top = "20px";
    welcomeMessage.style.left = "50%";
    welcomeMessage.style.transform = "translateX(-50%)";
    welcomeMessage.style.backgroundColor = "#0b1f2d";
    welcomeMessage.style.color = "#FFD700";
    welcomeMessage.style.padding = "15px 20px";
    welcomeMessage.style.borderRadius = "8px";
    welcomeMessage.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
    document.body.appendChild(welcomeMessage);

    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        welcomeMessage.remove();
    }, 5000);

    // Zoom da imagem ao passar o mouse
    const image = document.querySelector(".box img");
    image.addEventListener("mouseover", () => {
        image.style.transform = "scale(1.1)";
        image.style.transition = "transform 0.3s ease-in-out";
    });
    image.addEventListener("mouseout", () => {
        image.style.transform = "scale(1)";
    });
});
