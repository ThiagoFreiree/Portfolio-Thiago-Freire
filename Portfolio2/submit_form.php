<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST["nome"]);
    $email = htmlspecialchars($_POST["email"]);
    $mensagem = htmlspecialchars($_POST["mensagem"]);

    $para = "seuemail@example.com"; // Substitua pelo seu e-mail
    $assunto = "Nova mensagem do formulário de contato";
    $corpo = "Nome: $nome\nE-mail: $email\nMensagem:\n$mensagem";
    $cabecalho = "From: $email";

    if (mail($para, $assunto, $corpo, $cabecalho)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Falha ao enviar a mensagem.";
    }
}
?>
