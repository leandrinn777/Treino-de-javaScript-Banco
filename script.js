function EntrarPagina() {
    var nome_usuario = document.getElementById('inpUsuario').value
    var email_usuario = document.getElementById('inpEmail').value
    var senha_usuario = document.getElementById('inpSenha').value

    if (
        email_usuario === "leandroaugutovl2005@gmail.com" &&
        nome_usuario === "Leandro" &&
        senha_usuario === "123"
    ) {
        alert("Usuário logado com sucesso!");
        window.location.href = "ContaBancaria.html";
    } else {
        alert("Usuário, email ou senha incorretos. Tente novamente.");
    }
}

function VoltarPagina() {
    alert("Você será redirecionado para a página inicial.");
    window.location.href = "index.html";
}