Projeto do livro do GCADMO

A publicação do site não pode ser feita diretamente, pois precisa do index.html na frente
Como toda vez que muda o livro no R, ele atualiza dentro do _book, não daria muito certo pois o index fora não atualizaria.

Logo, como alternativa, foi criado uma branch chamada Site, onde será salva manualmente a pasta book toda vez que for atualizar o livro.
Sim, é chato lembrar. Tentar automatizar na versão definitiva ou encontrar outro meio.

Código:

git checkout Site
cp -r _book/* .
git add .
git commit -m "Atualização manual do site"
git push origin Site
git checkout master
