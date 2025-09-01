  function verificarSenha() {
    var senha = document.getElementById("senha-input").value;
    var senhaCorreta = "SegaranhaBitosa";  // defina sua senha aqui

    if (senha === senhaCorreta) {
      document.getElementById("conteudo-secreto").style.display = "block";
      document.getElementById("senha-div").style.display = "none";
    } else {
      document.getElementById("mensagem").innerHTML = 
        "Senha incorreta, resolva o exercício na marra.";
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("senha-input");

    if (input) {
      input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          verificarSenha();
        }
      });
    }
  });