document.addEventListener("DOMContentLoaded", () => {
    // Botão "Voltar" - Rola para o topo da página
    const backButton = document.querySelector(".back");
    backButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Cria um botão para alternar entre modo claro/escuro
    const toggleModeBtn = document.createElement("button");
    toggleModeBtn.textContent = "Modo Claro/Escuro";
    toggleModeBtn.classList.add("toggle-mode-btn");
    document.body.appendChild(toggleModeBtn);

    // Alterna entre o modo claro e escuro
    toggleModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

    // Mensagem de console quando vídeos são carregados
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach((iframe) => {
        iframe.addEventListener("load", () => {
            console.log("Vídeo carregado: " + iframe.src);
        });
    });
});
