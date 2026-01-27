function EntrarPagina() {
    var nome_usuario, senha_usuario;

    nome_usuario = document.getElementById('inpUsuario').value;
    senha_usuario = document.getElementById('inpSenha').value;

    if (nome_usuario === "Leandro" && senha_usuario === "123") {
        alert("Usuário logado com sucesso!");
        window.location.href = "ContaBancaria.html";
    } else {
        alert("Usuário e/ou senha incorretos. Tente novamente.");
    }
}

function VoltarPagina(){
    alert("Você sera redirecinado para pagina inical.") ;
    window.location.href = "index.html" ;

}