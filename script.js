function EntrarPagina() {
    const email = document.getElementById("inpEmail").value.trim().toLowerCase();
    const usuario = document.getElementById("inpUsuario").value.trim();
    const senha = document.getElementById("inpSenha").value.trim();
    const botao = document.getElementById("btnEntrar");

    botao.classList.add("loading");
    botao.disabled = true;

    setTimeout(() => {
        if (
            email === "leandroaugustovl2005@gmail.com" &&
            usuario === "Leandro" &&
            senha === "123"

        ) {
            window.location.href = "ContaBancaria.html";
            alert("Loading concluido")
        } else {
            alert("Usuário, email ou senha incorretos!");
            botao.classList.remove("loading");
            botao.disabled = false;
        }
    }, 2000); // tempo da animação
}

function VoltarPagina() {
    alert("Você será redirecionado para a página inicial.");
    window.location.href = "index.html";
}